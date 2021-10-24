const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Cliente = sequelize.define('Cliente', {
    username: {type:DataTypes.STRING}, 
    email: {type: DataTypes.STRING, primaryKey: true},
    password: {type:DataTypes.STRING},
    userType: {type:DataTypes.INTEGER}
}, {
    sequelize,
    timestamps: false,
});

module.exports = Cliente;