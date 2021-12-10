import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js'
import postagens from './data/postagens.js'

import User from './models/usuariosModel.js'
import Postagem from './models/postagensModel.js'

import conectarDB from './config/db.js'

dotenv.config()

conectarDB()

const importData = async() => {

    try{

        await User.deleteMany()
        await Postagem.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const examplePostagens = postagens.map((postagem) =>{
            return { ...postagem, user: adminUser }
        })

        await Postagem.insertMany(examplePostagens)

        console.log('Dados importados!')
        process.exit()

    }catch(error){
        console.error(`${error}`)
        process.exit(1)
    }

}

const destroyData = async() => {

    try{

        await User.deleteMany()
        await Postagem.deleteMany()

        console.log('Dados destruidos!')
        process.exit()

    }catch(error){

        console.error(`${error}`)
        process.exit(1)
    
    }

}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}
