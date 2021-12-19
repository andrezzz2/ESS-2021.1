const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Historico = sequelize.define('Historico', {
    Restaurant_Name: {type:DataTypes.STRING},
    Valor_Pedido: {type:DataTypes.NUMBER}
}, {
    sequelize,
    timestamps: true
});

module.exports = Historico;