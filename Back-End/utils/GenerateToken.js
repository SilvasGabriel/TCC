//Esse arquivo tem a função de gerar um token JSON, para usar na autenticação do usuário
const jwt = require('jsonwebtoken')

const GenerateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d',
    })

}

export default GenerateToken