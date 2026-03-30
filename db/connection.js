const Sequilize = require('sequelize')

const sequelize = new Sequilize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

module.exports = sequelize