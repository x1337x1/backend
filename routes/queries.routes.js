require("dotenv").config();
const express = require("express");
const router = express.Router();
const { query } = require('../controllers/queries-controller');



router.post(
    "/training/input",
    query
)

module.exports = router;
