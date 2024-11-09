require("dotenv").config();
const express = require("express");
const router = express.Router();
const { tgRegister, tgVerification } = require('../controllers/accounts-controller');



router.post(
	"/tg-register", 
	tgRegister
);
router.post(
	"/tg-verification", 
	tgVerification 
);

module.exports = router;
