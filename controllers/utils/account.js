require("dotenv").config();
const axios = require("axios");

const accountUtils = {

	async tgAuthentication(payload) {
		try {
			payload.callback_url = `${process.env.TELEGRAM_WEBHOOK_URL}/tg-webhook`;
			const response = await axios.post(`${process.env.TELEGRAM_AUTH_BASE_URL}/sendVerificationMessage`, payload, {
				headers: {
					'Authorization': `Bearer ${process.env.TELEGRAM_AUTH_TOKEN }`,
					'Content-Type': 'application/json'
				}
			});
			if(response.data.ok){
				return response.data.result;
			}
			return null;
		} catch (error) {
			console.error("@@  Error: accountUtils/tgAuthentication @@ ", error);
		}
	},
	async telegramVerification(payload) {
		try {
			const response = await axios.post(`${process.env.TELEGRAM_AUTH_BASE_URL}/checkVerificationStatus`, payload, {
				headers: {
					'Authorization': `Bearer ${process.env.TELEGRAM_AUTH_TOKEN }`,
					'Content-Type': 'application/json'
				}
			});
			if(response.data.ok){
				const status = response.data.result.verification_status.status;
				if(status === "code_valid") return response.data.result;  
			}
			return null;
		} catch (error) {
			console.error("@@  Error: accountUtils/tgAuthentication @@ ", error);
		}
	},
	generateId() {
		return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function() {
			var random = Math.random() * 16 | 0;
			return random.toString(16);
		});
	}
 
};

module.exports = accountUtils;