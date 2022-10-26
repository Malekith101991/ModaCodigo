const express = require("express");
const router = express.Router();
const groupController = require("../Controllers/groupController.js");

router.get("/formularioGroup", groupController.formularioGroup);

router.post("/formularioGroup", groupController.createGroup);

module.exports = router;
