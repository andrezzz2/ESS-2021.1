const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Cliente = sequelize.define('Cliente', {
    name: {type:DataTypes.STRING},
    lastname: {type:DataTypes.STRING},
    cpf: {type: DataTypes.INTEGER, primaryKey: true},
    email: {type: DataTypes.STRING},
    telefone: {type: DataTypes.INTEGER},
    password: {type:DataTypes.STRING},
    userType: {type:DataTypes.INTEGER}
}, {
    sequelize,
    timestamps: false,
});

module.exports = Cliente;