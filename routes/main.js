const express = require("express");

// express router class
const router = express.Router();
const mainController = require( "../controllers/main")

router.get("/", mainController.getIndex)

module.exports = router