const db = require("./../models");
const { tgAuthentication, tgVerifyStatus, generateUserId } = require('./utils/account');
const { customResponses, HTTPStatusCode } = require('../constants/index');

const qsmController = {

	async create(req, res) {
		try {
			const tgAuth = await db

			res.sendCreated();
		} catch (error) {
			console.error("@@  Error: qsmController/create @@ ", error);
			res.sendFailure()
		}
	},

};

module.exports = qsmController;