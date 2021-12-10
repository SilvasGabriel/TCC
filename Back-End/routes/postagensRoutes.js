import express from 'express'
const router = express.Router()

import { 
    getPostagens,
    getPostagensById,
} from '../controllers/postagemController.js'



router.route('/').get(getPostagens)

router.route('/:id').get(getPostagensById)


export default router