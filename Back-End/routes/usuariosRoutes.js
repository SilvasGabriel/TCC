import express from 'express'
const router = express.Router()

import { 
   autenticarUsuario,
   acessarPerfilUsuario,
   registrarUsuario,
   atualizarPerfilUsuario,
   acessarUsuarios,
} from '../controllers/usuarioController.js'

import {
   proteger,
   administrador,
} from '../middleware/autorizarMiddleware.js'

router.route('/').post(registrarUsuario).get(proteger, administrador, acessarUsuarios)

router.post('/login', autenticarUsuario)

router.route('/perfil')
   .get(proteger ,acessarPerfilUsuario)
   .put(proteger, atualizarPerfilUsuario)
   
export default router