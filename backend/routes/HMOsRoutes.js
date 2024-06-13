import express from 'express'

import { addHMO, deleteHMO, getAllHMOs, getHMOById, updateHMO } from '../controllers/HMOsController.js'

const router = express.Router()

router.get('/', getAllHMOs)
router.get('/:id', getHMOById)
router.post('/', addHMO)
router.put('/:id', updateHMO)
router.delete('/:id', deleteHMO)

export default router