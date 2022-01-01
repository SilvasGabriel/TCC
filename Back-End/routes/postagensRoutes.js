import express from 'express'
const router = express.Router()

import { 
    getPostagens,
    getPostagensById,
    deletePostagens,
    registrarPostagens,
    atualizarPostagens,
} from '../controllers/postagemController.js'

import {
    proteger,
    administrador,
 } from '../middleware/autorizarMiddleware.js'



router.route('/')
        .get(getPostagens)
        .post(proteger, administrador, registrarPostagens)

router.route('/:id')
        .get(getPostagensById)
        .delete(proteger, administrador, deletePostagens)
        .put(proteger, administrador, atualizarPostagens)

export default router