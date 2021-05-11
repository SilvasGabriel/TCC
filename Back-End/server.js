//Importe os módulos
import dotenv from "dotenv";
import express from "express";
import conectarDB from './db/db.js'

dotenv.config()

const app = express()

const PORTA = process.env.PORTA || 5000

app.listen(
    PORTA,
    console.log(`Servidor rodando em ${process.env.NODE_ENV} na porta ${PORTA}`)
)





