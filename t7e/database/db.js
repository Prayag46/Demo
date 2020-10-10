const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize("t7e","root","",{
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: 0,


    pool: {
        max: 5,
        min: 0,
        acquire:30000,
        idle: 1000
    }
})


db.sequelize = sequelize
db.Sequelize = sequelize

module.exports = db