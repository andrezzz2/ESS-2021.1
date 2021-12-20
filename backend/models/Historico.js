const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Historico = sequelize.define('Historico', {
    Restaurant_Name: {type:DataTypes.STRING},
    Valor_Pedido: {type:DataTypes.NUMBER},
    Data_Hora: {type:DataTypes.STRING}
}, {
    sequelize,
    timestamps: false
});

module.exports = Historico;