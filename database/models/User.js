module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        user_name: {
            type: dataTypes.STRING
        },
        user_mail: {
            type: dataTypes.STRING
        },
        user_celphone: {
            type: dataTypes.STRING
        }
        ,
        user_message: {
            type: dataTypes.STRING
        },
        user_message2: {
            type: dataTypes.STRING
        },
        user_message3: {
            type: dataTypes.STRING
        },
        area: {
            type: dataTypes.STRING
        }
    };
    let config = {
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Rol, { 
            as: "rol", 
            foreignKey: "rol_id"
        })
    }
    return User
}
