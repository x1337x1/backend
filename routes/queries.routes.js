require("dotenv").config();
const express = require("express");
const router = express.Router();
const { query } = require('../controllers/queries-controller');



router.post(
    "/ask",
    query
)

module.exports = router;
