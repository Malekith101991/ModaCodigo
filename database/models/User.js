module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        rol: {
            type: dataTypes.STRING
        },
        topicGroup: {
            type: dataTypes.STRING
        }
        ,
        nameGroup: {
            type: dataTypes.STRING
        },
        fechaEndulzada1: {
            type: dataTypes.DATE
        },
        valorEndulzada1: {
            type: dataTypes.STRING
        },
        fechaEndulzada2: {
            type: dataTypes.DATE
        },
        valorEndulzada2: {
            type: dataTypes.STRING
        },
        fechaDescubrimiento: {
            type: dataTypes.DATE
        },
        valorDescubrimiento: {
            type: dataTypes.STRING
        },
        likes: {
            type: dataTypes.STRING
        },
        dislikes: {
            type: dataTypes.STRING
        },
        allergies: {
            type: dataTypes.STRING
        }
    };
    let config = {
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    return User
}
