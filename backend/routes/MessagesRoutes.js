import express from 'express'

import { getAllMessages } from '../controllers/MessagesController.js'

const router = express.Router()

router.get('/', getAllMessages)

// router.get('/:id', getBlog)
// router.post('/', createBlog)
// router.put('/:id', updateBlog)
// router.delete('/:id', deleteBlog)

export default router