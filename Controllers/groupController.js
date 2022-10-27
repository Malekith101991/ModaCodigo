const db = require('../database/models');
const path = require ('path');

const groupController = {

    crear: (req, res) => {
        res.render('formularioGroup')
    },

    createGroup: (req, res) => {
        db.Group.create({
            nameGroup: req.body.nameGroup,
            topicGroup: req.body.topicGroup,
            fechaEndulazada1: req.body.fechaEndulzada1,
            valorEndulzada1: req.body.valorEndulzada1,
            fechaEndulazada2: req.body.fechaEndulzada2,
            valorEndulzada2: req.body.valorEndulzada2,
            fechaDescubrimiento: req.body.fechaDescubrimiento,
            valorDescubrimiento: req.body.valorDescubrimiento
        })
        .then(()=>{
            res.render('formularioInscripcion')
        })
        .catch(error => res.send(error))
    },

}

module.exports = groupController;