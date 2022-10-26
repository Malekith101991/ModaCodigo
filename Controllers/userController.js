const db = require('../database/models');
const path = require ('path');


const userController = {

    formularioInscripcion: (req, res) => {
            res.render('formularioInscripcion')
        },
    
    createUser: (req, res) => {
        db.User.create({
            name: req.body.name,
            contrasena: req.body.contrasena,
            rol: req.body.rol,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            allergies: req.body.allergies
        })
        .then(()=>{
        res.render('felicitaciones')   
        })
        .catch(error => res.send(error))
    },
    

}

module.exports = userController;