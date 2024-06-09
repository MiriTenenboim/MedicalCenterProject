import express from 'express'

import { getAllHMOs } from '../controllers/HMOsController.js'

const router = express.Router()

router.get('/', getAllHMOs)

// router.get('/:id', getBlog)
// router.post('/', createBlog)
// router.put('/:id', updateBlog)
// router.delete('/:id', deleteBlog)

export default router