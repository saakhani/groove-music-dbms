const express = require("express");
const bodyParser = require('body-parser');
const albumController = require("../controller/albumController.js");

const router = express.Router();

router.get("/", albumController.getAllAlbums);
router.get("/getName/:id", albumController.getAlbumName);
router.get("/getNameType/:id", albumController.getAlbumNameType);
router.get("/getAllNames", albumController.getAllAlbumNames);



module.exports = router;