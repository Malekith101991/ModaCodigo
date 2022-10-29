const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController.js");

router.get('/crearGrupos', userController.nuevoGrupo);
router.post('/grupos', userController.crearGrupo);
router.get('/formulario', userController.nuevoUsuario);
router.post('/formulario', userController.crearUsuario);
router.get('/felicitaciones/:id', userController.buscarAmigo);
router.get('/grupos', userController.elegirGrupo);
router.get('/usuarios', userController.usuarios);



module.exports = router;