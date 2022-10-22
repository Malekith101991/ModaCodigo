const db = require('../database/models');
const path = require ('path');


const userController = {

    formularioInscripcion: (req, res) => {
        res.render('formularioInscripcion');
    },
    createUser: (req, res) => {
        db.User.create({
            user_name: req.body.user_name,
            user_mail: req.body.user_mail,
            user_celphone: req.body.user_celphone,
            user_message: req.body.user_message,
            user_message2: req.body.user_message2,
            user_message3: req.body.user_message3, 
            area:req.body.area
        })
        .then((User)=> {
            res.render('felicitaciones')
        })
    }

}

module.exports = userController;