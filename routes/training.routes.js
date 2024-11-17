require("dotenv").config();
const express = require("express");
const router = express.Router();
const { FileTraining, inputTraining, urlTraining } = require('../controllers/training-controller');



router.post(
    "/file",
    FileTraining
)

router.post(
    "/input",
    inputTraining
)

router.post(
    "/url",
    urlTraining 
)
module.exports = router;
