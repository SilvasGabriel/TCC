import  jwt  from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import User from "../models/usuariosModel.js";

const proteger = asyncHandler( async(req, res, next)=> {
    
    let token

    //Checar o token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
        try {

            token = req.headers.authorization.split(' ')[1]

            //decodificar o token
            const decodificar = jwt.verify(token, process.env.JWT_SECRET)

            //Requisita todos os dados menos a senha
            req.usuario = await User.findById(decodificar.id).select('-password')

            next()

        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Não autorizado, falha no token!')
        }

    }

    if (!token){
        res.status(401)
        throw new Error('Não autorizado!, Token não encontrado.')
    }


    
})

const administrador  = (req, res, next) => {

    if(req.usuario && req.usuario.isAdmin){
        next()
    }else{
        res.status(401)
        throw new Error('Não autorizado como administrador!')
    }

}


export {
    proteger,
    administrador,
}