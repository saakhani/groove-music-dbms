const express = require("express");
const bodyParser = require('body-parser');
const playlistController = require("../controller/playlistController.js");

const router = express.Router();

router.get("/", playlistController.getAllPlaylists);

module.exports = router;