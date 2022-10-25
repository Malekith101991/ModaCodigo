const db = require('../database/models');
const path = require ('path');


const userController = {

    formularioInscripcion: (req, res) => {
        db.Area.findAll()
        .then(areas => {
            res.render('formularioInscripcion', { areas })
        })
        .catch(error => res.send(error)) 
    },
    createUser: (req, res) => {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            contrasena: req.body.contrasena,
            rol: req.body.rol,
            topicGroup: req.body.topicGroup,
            nameGroup: req.body.nameGroup,
            fechaEndulzada1: req.body.fechaEndulzada1,
            valorEndulzada1: req.body.valorEndulzada1,
            fechaEndulzada2: req.body.fechaEndulzada2,
            valorEndulzada2: req.body.valorEndulzada2,   
            fechaDescubrimiento: req.body.fechaDescubrimiento,
            valorDescubrimiento: req.body.valorDescubrimiento,
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