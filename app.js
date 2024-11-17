const express = require('express');
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 1337;
const createError = require("http-errors");
const {initConsumer} = require("./controllers/eventBus/kafka/consumer")
const {initProducer}  = require("./controllers/eventBus/kafka/producer")
const WebSocketServer = require('./controllers/eventBus/socket/index')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", require("./routes"));


global.socket = new WebSocketServer(`${process.env.WEBSOCKET_URL || "ws://localhost:8000"}?origin=was`);


app.use(function (req, res, next) {
    next(createError(404, 'The requested resource was not found.'));
  });
  




db.once("open", () => {
	app.listen(PORT, async () => {
    await initProducer();
    await initConsumer(); 
	});
});

module.exports = app;
