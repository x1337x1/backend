const db = require("./../models");
const { tgAuthentication, telegramVerification, generateId } = require('./utils/account');

const accountController = {

	async tgRegister(req, res) {
		try {
			const telegramAuth = await tgAuthentication(req.body);
			if(telegramAuth){       
				const account = await db.Accounts.create({
					phone_number: telegramAuth.phone_number,
					user_id: generateId(), // to modify after getting user fingerprint
					status: 0
				});
				return res.sendCreated({ data: account, message: "Success! Your account in the oven—just waiting for a quick verification!"});
			}
            res.sendBadRequest({message: "Oops! Something went wrong. Let’s give it another go!"})
		} catch (error) {
			console.error("@@  Error: accountController/tgRegister @@ ", error);
			res.sendFailure()
		}
	},
	async tgVerification(req, res) {
		try {
			const verification = await telegramVerification(req.body);
			if(verification){
				const {phone_number} = verification;
				await db.Accounts.findOneAndUpdate(
					{ phone_number: phone_number }, 
					{ $set: { status: 1 } }, 
					{ new: true }
				); 
				return res.sendOK();            
			}
			res.sendBadRequest({message: "Oops! That code didn't unlock the treasure. Let's try again!"})
		} catch (error) {
			console.error("@@  Error: accountController/tgVerification @@ ", error);
			res.sendFailure()
		}
	},

};

module.exports = accountController;