module.exports = (sequelize, dataTypes) => {
    let alias = 'Group';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        topicGroup: {
            type: dataTypes.STRING
        },
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
    };
    let config = {
        timestamps: false
    }
    const Group = sequelize.define(alias, cols, config);

    return Group
}