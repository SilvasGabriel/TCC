import asyncHandler from 'express-async-handler'

import User from '../models/usuariosModel.js'

import gerarToken from '../utils/GerarToken.js'


//@descrição  Autenticar os usuários e acessar o token
//@rotas  POST /api/users/login 
//@acesso Público

const autenticarUsuario = asyncHandler(async(req, res) => {

    const {email, password} = req.body

   //Encontrar um usuário pelo email
   const usuario = await User.findOne({ email })

   if(usuario && (await usuario.matchPassword(password))){

    res.json({
        _id: usuario._id,
        name: usuario.name,
        email: usuario.email,
        telefone: usuario.telefone,
        faculdade: usuario.faculdade,
        matricula: usuario.matricula,
        password: usuario.password,
        isAdmin: usuario.isAdmin,
        token: gerarToken(usuario._id),
    })

   }else{
       res.status(401)
       throw new Error('Senha ou Email inválidos! ')
   }

})

//@descrição Registrar um novo usuario
//@rotas  POST /api/users/register
//@acesso Público

const registrarUsuario = asyncHandler(async(req, res)=>{

    const {name,email,telefone,faculdade,matricula,password} = req.body

    //Checar se o usuário já existe
    const usuarioExistente = await User.findOne({email})

    if(usuarioExistente){
        res.status(400)
        throw new Error('Usuário existente no sistema!')
    }

    const usuario = await User.create({
        name,
        email,
        telefone,
        faculdade,
        matricula,
        password,
    })

    if(usuario){
        res.status(201).json({
            _id: usuario._id,
            name: usuario.name,
            email: usuario.email,
            telefone: usuario.telefone,
            faculdade: usuario.faculdade,
            matricula: usuario.matricula,
            password: usuario.password,
            isAdmin: usuario.isAdmin,
            token: gerarToken(usuario._id),
        })

    }else{
        res.status(400)
        throw new Error('Usuário inválido!')
    }

})



//@descrição  Usuário acessa o seu perfil no sistema
//@rotas  GET /api/users/perfil 
//@acesso Privado

const acessarPerfilUsuario = asyncHandler (async (req, res)=> {

   const usuario = await User.findById(req.usuario._id)

   if(usuario){
        
    res.json({
        _id: usuario._id,
        name: usuario.name,
        email: usuario.email,
        telefone: usuario.telefone,
        faculdade: usuario.faculdade,
        matricula: usuario.matricula,
        password: usuario.password,
        isAdmin: usuario.isAdmin,
    })

   }else{
       res.status(404)
       throw new Error('Usuário não encontrado!')
   }

})


//@descrição  Usuário atualiza seu perfil no sistema
//@rotas  PUT /api/users/perfil 
//@acesso Privado

const atualizarPerfilUsuario = asyncHandler( async(req, res) => {

    const usuario = await User.findById(req.usuario._id)
      
    if(usuario){

        usuario.name = req.body.name || usuario.name ,
        usuario.email = req.body.email || usuario.email,
        usuario.telefone = req.body.telefone || usuario.telefone,
        usuario.faculdade = req.body.faculdade || usuario.faculdade,
        usuario.matricula = req.body.matricula || usuario.matricula
        
        if(req.body.password){
            usuario.password = req.body.password 
        }

        const usuarioAtualizado = await usuario.save()

        res.json({
            _id: usuarioAtualizado._id,
            name: usuarioAtualizado.name,
            email: usuarioAtualizado.email,
            telefone: usuarioAtualizado.telefone,
            faculdade: usuarioAtualizado.faculdade,
            matricula: usuarioAtualizado.matricula,
            password: usuarioAtualizado.password,
            token: gerarToken(usuarioAtualizado._id)
        })

    }else{
        res.status(404)
        throw new Error('Usuário não encontrado!')
    }

}) 


//@descrição  Administrador acessa todos os usuários
//@rotas  GET /api/users
//@acesso Privado/Administrador

const acessarUsuarios = asyncHandler (async (req, res)=> {

    const usuarios = await User.find({})
 
   res.json(usuarios)
 
 })
 

export {
    autenticarUsuario,
    acessarPerfilUsuario,
    registrarUsuario,
    atualizarPerfilUsuario,
    acessarUsuarios,
}