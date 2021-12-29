import express from 'express'
const router = express.Router()

import { 
    getPostagens,
    getPostagensById,
    deletePostagens,
} from '../controllers/postagemController.js'

import {
    proteger,
    administrador,
 } from '../middleware/autorizarMiddleware.js'



router.route('/').get(getPostagens)

router.route('/:id')
        .get(getPostagensById)
        .delete(proteger, administrador, deletePostagens)


export default router