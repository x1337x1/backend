require('./instrument.js')
const Sentry = require("@sentry/node");
const express = require('express');
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 1337;
const createError = require("http-errors");
const { watchTower, panicLogger, fallBackLogger } = require('./utils/logger/winston.js');

app.use(require("./utils/httpsResponseHandler"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Middleware to log all requests using watchTower
app.use((req, res, next) => {
    watchTower.info({
      message: `${req.method} ${req.url}`,
      timestamp: new Date().toISOString(),
      ip: req.ip
    });
    next();
  });


/**
 * Prerequisites for starting application
 */

app.use("/api", require("./routes"));

app.post("/tg-webhook", async (req, res, next) => {
	try {
		// console.log("telegram webhook response =>", req.body)
		res.sendOK({ message: "Webhook processed successfully." });
	} catch (error) {
		console.error("Error in telegram webhook ", error);
		res.sendFailure({ message: "Failed to process webhook." });
	}
});

Sentry.setupExpressErrorHandler(app);


app.use(function (req, res, next) {
    next(createError(404, 'The requested resource was not found.'));
  });
  
  app.use((err, req, res, next) => {
    panicLogger.error({
      message: err.message,
      stack: err.stack,
      timestamp: new Date().toISOString(),
    });
  
    if (err.status === 404) {
      return res.sendNotFound({message : 'Resource not found.'})
    }
    res.sendFailure({ message: 'Something went wrong!' });
  });


// Handle uncaught exceptions and rejections 
process.on('uncaughtException', (error) => {
    fallBackLogger.error({ message: 'Uncaught Exception', error: error.message, stack: error.stack });
    process.exit(1); 
  });
  

process.on('unhandledRejection', (reason, promise) => {
  fallBackLogger.error({ message: 'Unhandled Promise Rejection', reason, promise });
});


db.once("open", () => {
	app.listen(PORT, async () => {
	});
});

module.exports = app;
