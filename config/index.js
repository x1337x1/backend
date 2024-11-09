require("dotenv").config();
if (process.env.NODE_ENV === "development")
	module.exports = require("./develop");
if (process.env.NODE_ENV === "production")
	module.exports = require("./production");


  