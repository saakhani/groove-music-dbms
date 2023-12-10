const express = require("express");
const bodyParser = require('body-parser');
const userController = require("../controller/userController.js");

const router = express.Router();

router.get("/", userController.getAllUsers);

module.exports = router;