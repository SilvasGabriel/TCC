import express from 'express'
const router = express.Router()

import { 
   autenticarUsuario,
   acessarPerfilUsuario,
   registrarUsuario,
   atualizarPerfilUsuario,
} from '../controllers/usuarioController.js'

import {
   proteger,
} from '../middleware/autorizarMiddleware.js'

router.route('/').post(registrarUsuario)

router.post('/login', autenticarUsuario)

router.route('/perfil')
   .get(proteger ,acessarPerfilUsuario)
   .put(proteger, atualizarPerfilUsuario)
   
export default router