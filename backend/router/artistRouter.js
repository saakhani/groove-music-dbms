const express = require("express");
const bodyParser = require('body-parser');
const artistController = require("../controller/artistController.js");

const router = express.Router();

router.get("/", artistController.getAllArtists);

module.exports = router;