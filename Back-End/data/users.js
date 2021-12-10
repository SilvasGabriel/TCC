import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Gabriel Santos Silva',
        email: 'gabrielsilva291996@gmail.com',
        telefone:'34997762924',
        faculdade:'Universidade do Estado de Minas Gerais',
        matricula:'1554530',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Livia Rodrigues Pereira',
        email: 'LiviaRodriguesPereira@rhyta.com',
        telefone:'4435781653',
        faculdade:'',
        matricula:'',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Enzo Correia Cavalcanti',
        email: 'EnzoCorreiaCavalcanti@teleworm.us',
        telefone:'4825353782',
        faculdade:'Universidade Federal de Santa Catarina',
        matricula:'2012345',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Ágatha Cardoso Araujo',
        email: 'AgathaCardosoAraujo@dayrep.com',
        telefone:'32999587414',
        faculdade:'',
        matricula:'',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    }
]

export default users