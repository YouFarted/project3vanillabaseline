const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

const Thing = sequelize.define('Thing', {
    someStringField: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anotherField: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
 //other model options go here
 {}
);

module.exports = Thing;