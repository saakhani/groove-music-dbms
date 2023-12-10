const express = require("express");
const bodyParser = require('body-parser');
const albumController = require("../controller/albumController.js");

const router = express.Router();

router.get("/", albumController.getAllAlbums);



module.exports = router;