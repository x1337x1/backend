const { Schema, model } = require("mongoose");
const AccountsSchema = new Schema(
	{
		user_id: {
			type: String,
			required: true,
			index: true,
		},
		email: {
			type: String,
			required: false,
		},
		full_name: {
			type: String,
			required: false,
		},
		phone_number: {
			type: String,
			required: false,
		}, 
		status: {
			type: Number,
			required: true,
			default: 1,
		},
		plan: {
			type: String,
			// enum: ["Free", "Pro", "Business"], // until to be discussed
			// default: "Free",
		},

	},
	{ timestamps: true }
);

const Account = model('Account', AccountsSchema);

module.exports = Account;
