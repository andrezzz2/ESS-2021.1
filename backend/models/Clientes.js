const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Cliente = sequelize.define('Cliente', {
    name: {type:DataTypes.STRING},
    lastname: {type:DataTypes.STRING},
    cpf: {type: DataTypes.STRING, primaryKey: true},
    birth_date: {type: DataTypes.DATE},
    email: {type: DataTypes.STRING},
    telefone: {type: DataTypes.STRING},
    password: {type:DataTypes.STRING},
    userType: {type:DataTypes.INTEGER}
}, {
    sequelize,
    timestamps: false,
});

module.exports = Cliente;