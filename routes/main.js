const express = require("express");

// express router class
const router = express.Router();
const mainController = require( "../controllers/main")
const mapsController = require("../controllers/maps")

router.get("/", mainController.getIndex)
router.get("/latlong", mapsController.latLong)

module.exports = router