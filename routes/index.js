const express = require("express");
const router = express.Router();
const accountsRoutes = require("./accounts.routes");
const trainingRoutes = require("./training.routes")
const queriesRoutes = require("./queries.routes")

router.use("/v1/account", accountsRoutes);
router.use("/v1/training", trainingRoutes)
router.use("/v1/queries",  queriesRoutes)

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

module.exports = router;
