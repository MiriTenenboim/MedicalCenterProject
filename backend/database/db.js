import {Sequelize} from "sequelize"

const db = new Sequelize("medical_center", "root", "MySQLDatabase*(89", {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

export default db;
