import asyncHandler from 'express-async-handler'

import Postagem from '../models/postagensModel.js'


//@descrição  Obter todos os dados
//@rotas  GET /api/postagens 
//@acesso Público

const getPostagens = asyncHandler(async(req, res) => {

    const postagens  = await Postagem.find({}).sort({createdAt: 'desc'})

    res.json(postagens)

})

//@descrição  Obter uma postagem especifica
//@rotas  GET /api/postagens/:id 
//@acesso Público

const getPostagensById = asyncHandler(async(req, res) => {

    const postagem = await Postagem.findById(req.params.id)

    if(postagem){
        res.json(postagem)
    }else{
        res.status(404)
        throw new Error ('Postagem não encontrada!')

    }

})


//@descrição  Excluir uma postagem
//@rotas  DELETE /api/postagens/:id 
//@acesso Privado/Administrador

const deletePostagens = asyncHandler( async (req, res) => {

    const postagem = await Postagem.findById(req.params.id)

    if(postagem){
        
        await postagem.remove()

        res.json({message: 'Postagem removida com sucesso!'})

    }else{
        res.status(404)
        throw new Error ('Postagem não encontrada!')
    }

})


//@descrição Criar uma postagem
//@rotas  POST /api/postagens
//@acesso Privado/Administrador

const registrarPostagens = asyncHandler( async (req, res) => {

    const postagem = new Postagem ({
        user: req.usuario._id,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    })

    const criarPostagem = await postagem.save()

    res.status(201).json(criarPostagem)

})


//@descrição Atualizar uma postagem
//@rotas  PUT /api/postagens/:id
//@acesso Privado/Administrador

const atualizarPostagens = asyncHandler( async (req, res) => {

    const {name, image, description} = req.body

    const postagem = await Postagem.findById(req.params.id)

    if(postagem){

        postagem.name = name,
        postagem.image = image,
        postagem.description = description
        
        const atualizarPostagem = await postagem.save()

        res.json(atualizarPostagem)

    }else{
        res.status(404)
        throw new Error ('Postagem não encontrada!')
    }

})




export {
    getPostagens,
    getPostagensById,
    deletePostagens,
    registrarPostagens,
    atualizarPostagens,
}