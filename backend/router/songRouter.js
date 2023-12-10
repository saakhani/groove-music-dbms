const express = require("express");
const bodyParser = require('body-parser');
const songController = require("../controller/songController.js");

const router = express.Router();

router.get("/", songController.getAllSongs);
router.get("/album/:id", songController.getSongsByAlbumId); 



module.exports = router;