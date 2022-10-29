const db = require('../database/models');
const path = require('path');


const userController = {

    nuevoGrupo: (req, res) => {
        return res.render('crearGrupos')
    },
    crearGrupo: (req, res) => {
        db.Group.create(
            {
                nameGroup: req.body.nameGroup,
                topicGroup: req.body.topicGroup,
                fechaEndulzada1: req.body.fechaEndulzada1,
                valorEndulzada1: req.body.valorEndulzada1,
                fechaEndulzada2: req.body.fechaEndulzada2,
                valorEndulzada2: req.body.valorEndulzada2,
                fechaDescubrimiento: req.body.fechaDescubrimiento,
                valorDescubrimiento: req.body.valorDescubrimiento,
                lugarDescubrimiento: req.body.lugarDescubrimiento

            })
            .then(() => {
                return res.render('index')
            })
            //.catch(error => res.send(error))
    },
    nuevoUsuario: (req, res) => {
        let userId = req.params.id;
        let promUser = db.User.findByPk(userId, { include: ['group'] });
        let promGrupos = db.Group.findAll();
        Promise.all([promUser, promGrupos])
            .then(([User, grupo]) => {
                return res.render('formularioInscripcion', { User, grupo })
            })
    },
    crearUsuario: (req, res) => {
        db.User.create({
            name: req.body.name,
            contrasena: req.body.contrasena,
            rol: req.body.rol,
            group_id: req.body.group_id,
            email: req.body.email,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
            allergies: req.body.allergies
        })
            .then(() => {
                return res.render('index')
            })
    },
    elegirGrupo: (req, res) => {
        db.Group.findAll()
        .then((grupo) => {
            return res.render('grupos', { grupo })
        })
    },
    buscarAmigo: (req, res) => {
        let grupoId = req.params.id;
        let promGrupos = db.Group.findByPk(grupoId);
        let promUsuarios = db.User.findAll({
            where: {
                group_id: grupoId
            }
        });
        Promise.all([promGrupos, promUsuarios])
        .then(([group, users]) => {
            return res.render('felicitaciones' , { group, users })
        })
    },
    usuarios: (req, res) => {
        let grupoId = req.params.id;
        let promGrupos = db.Group.findByPk(grupoId);
        let promUsuarios = db.User.findAll({
            where: {
                group_id: grupoId
            }
        })
        Promise.all([promUsuarios, promGrupos])
        .then(([users])=> {
            return res.render('usuarios', { users })
        })
    }
}

module.exports = userController;