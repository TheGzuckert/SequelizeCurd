const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Anime = db.define('Anime', {
    anime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lancamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
    }
})
module.exports = Anime