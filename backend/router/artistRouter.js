const express = require("express");
const bodyParser = require('body-parser');
const artistController = require("../controller/artistController.js");

const router = express.Router();

router.get("/", artistController.getAllArtists);
router.get("/getName/:id", artistController.getArtistName);
router.get("/getAllNames", artistController.getAllArtistNames);

router.post("/addArtist", artistController.addArtist);

module.exports = router;