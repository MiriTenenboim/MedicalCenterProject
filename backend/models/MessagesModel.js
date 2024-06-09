// importamos la conexión a la DB
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

const MessagesModel = db.define("messages", {
    message: {type: DataTypes.STRING},
    status: {type: DataTypes.BOOLEAN}
})

export default MessagesModel

