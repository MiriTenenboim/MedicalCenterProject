import express from 'express'

import { AddMessage, deleteMessage, getAllMessages, getMessageById, updateMessage } from '../controllers/MessagesController.js'

const router = express.Router()

router.get('/', getAllMessages)
router.get('/:id', getMessageById)
router.post('/', AddMessage)
router.put('/:id', updateMessage)
router.delete('/:id', deleteMessage)

export default router