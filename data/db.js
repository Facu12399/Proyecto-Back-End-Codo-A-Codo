const {Sequelize} = require("sequelize");

const db = new Sequelize ("posteos24255","root","",{
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

module.exports = db;