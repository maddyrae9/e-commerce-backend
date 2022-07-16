require("dotenv").config();

const sequelize = require("sequelize");
let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
    {
        host: "localhost",
        dialect: "mysql",
        port: 3301,
    } 
    );
}

module.exports = sequelize;