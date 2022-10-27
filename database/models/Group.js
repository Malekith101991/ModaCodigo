module.exports = (sequelize, dataTypes) => {
    let alias = 'Group';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameGroup: {
            type: dataTypes.STRING
        },
        topicGroup: {
            type: dataTypes.STRING
        },
        fechaEndulzada1: {
            type: dataTypes.DATE
        },
        valorEndulzada1: {
            type: dataTypes.INTEGER
        },
        fechaEndulzada2: {
            type: dataTypes.DATE
        },
        valorEndulzada2: {
            type: dataTypes.INTEGER
        },
        fechaDescubrimiento: {
            type: dataTypes.DATE
        },
        valorDescubrimiento: {
            type: dataTypes.INTEGER
        },
        lugarDescubrimiento: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false
    }
    const Group = sequelize.define(alias, cols, config);

    Group.associate = function(models){
        Group.hasMany(models.User, {
            as: 'users',
            foreignKey: 'group_id'
        })
    }
    return Group
}