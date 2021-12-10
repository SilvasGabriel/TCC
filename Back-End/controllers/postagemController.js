import asyncHandler from 'express-async-handler'

import Postagem from '../models/postagensModel.js'


//@descrição  Obter todos os dados
//@rotas  GET /api/postagens 
//@acesso Público

const getPostagens = asyncHandler(async(req, res) => {

    const postagens  = await Postagem.find({})

    res.json(postagens)

})

//@descrição  Obter um dado especifico
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

export {
    getPostagens,
    getPostagensById,
}