import HMOsModel from "../models/HMOsModel.js";


export const getAllHMOs = async (req, res) => {
    try {
        const HMOs = await HMOsModel.findAll()
        res.json(HMOs)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getHMOById = async (req, res) => {
    try {
        const HMO = await HMOsModel.findAll({
            where: {id: req.params.id}
        })
        res.json(HMO[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const addHMO = async (req, res) => {
    try {
        await HMOsModel.create(req.body)
        res.json({
            "message" : "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateHMO = async(req, res) => {
    try {
        await HMOsModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "message" : "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteHMO = async( req, res) => {
    try {
        await HMOsModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message" : "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
