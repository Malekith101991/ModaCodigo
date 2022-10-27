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
            type: dataTypes.INTEGER
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
        tableName: "users",
        timestamps: false
    }
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Group,{
            as: 'grupos',
            foreignKey: "group_id"
        });
    }

    return User
}