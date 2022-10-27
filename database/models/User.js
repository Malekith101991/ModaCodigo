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
        email: {
            type: dataTypes.STRING
        },
        rol: {
            type: dataTypes.STRING
        },
        
        group_id: {
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

    User.associate = function (models) {
        User.belongsTo(models.Group,{
            as: "group",
            foreignKey: "group_id"
        })
    }
    return User
}
