import mongoose from 'mongoose'

const conectarDB = async() => {
    try{

        const conexao = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser:true,
        })

        console.log(`MongoDB conectado: ${conexao.connection.host}`)

    }catch(error){

        console.error(`Error: ${error.message}`)
        process.exit(1)

    }
}

export default conectarDB