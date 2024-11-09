require("dotenv").config();
const express = require("express");
const router = express.Router();
const { FileTraining, inputTraining } = require('../controllers/training-controller');



router.post(
    "/file",
    FileTraining
)

router.post(
    "/input",
    inputTraining
)

module.exports = router;
