const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController.js");

router.get('/grupos', userController.nuevoGrupo);
router.post('/grupos', userController.crearGrupo);
router.get('/formulario', userController.nuevoUsuario)
router.post('/formulario', userController.crearUsuario)



module.exports = router;