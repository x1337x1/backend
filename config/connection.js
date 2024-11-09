const mongoose = require("mongoose");
const { DB_URI } = require("./index");

mongoose
	.connect(DB_URI, {
		dbName: "Nervana"
	})
	.then(() => {
		console.log('Mongo Connected')
	})
	.catch((err) => console.error(`PULSE MongoDB Connection Error: ${err.message}`));
module.exports = mongoose.connection;
