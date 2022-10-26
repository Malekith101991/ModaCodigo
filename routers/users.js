const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController.js");

router.get("/crear", userController.formularioInscripcion);

router.post('/formulario', userController.createUser);



module.exports = router;