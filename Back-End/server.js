//Express Setup
import express from 'express'
const app = express()
app.use(express.json())

//dotenv Setup
import dotenv from 'dotenv'
dotenv.config()

//Banco de Dados Setup
import conectarDB from './config/db.js'
conectarDB()

//Rotas
import postagensRoutes from './routes/postagensRoutes.js'
import usuarioRoutes from './routes/usuariosRoutes.js'

app.use('/api/postagens', postagensRoutes)
app.use('/api/users', usuarioRoutes)

//Middlewares de erro
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

app.use(notFound)
app.use(errorHandler)


app.get('/', (req, res)=>{
    res.send('API está funcionando...')
})


const PORTA = process.env.PORTA || 5000

app.listen(
    PORTA, 
    console.log(`Servidor funcionando em modo de ${process.env.NODE_ENV} na porta ${PORTA}...`))