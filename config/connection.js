const mongoose = require("mongoose");
const { DB_URI } = require("./index");

mongoose
	.connect(DB_URI, {
		dbName: "PULSE"
	})
	.then(() => {
	})
	.catch((err) => console.error(`PULSE MongoDB Connection Error: ${err.message}`));
module.exports = mongoose.connection;
