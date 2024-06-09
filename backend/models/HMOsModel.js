// importamos la conexión a la DB
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

const HMOsModel = db.define("hmos", {
    name: {type: DataTypes.STRING},
})

export default HMOsModel

