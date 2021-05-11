//Importando módulos
import mongoose from 'mongoose'

//Fazendo a conexão com o banco de dados
const conectarBD = async() => {
    
    try{

        const conexao = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
    
        console.log(`MongoDB conectado em: ${conexao.connection.host}`)
    }catch(error){
        console.error(`Erro: ${error.message}`)
        process.exit(1)
    }
        
}

export default conectarBD