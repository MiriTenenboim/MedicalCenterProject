import MessagesModel from "../models/MessagesModel.js";


export const getAllMessages = async (req, res) => {
    try {
        const messages = await MessagesModel.findAll()
        res.json(messages)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getMessageById = async (req, res) => {
    try {
        const message = await MessagesModel.findAll({
            where: {id: req.params.id}
        })
        res.json(message[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const AddMessage = async (req, res) => {
    try {
        await MessagesModel.create(req.body)
        res.json({
            "message" : "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateMessage = async(req, res) => {
    try {
        await MessagesModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "message" : "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteMessage = async( req, res) => {
    try {
        await MessagesModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message" : "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
