import mongoose from 'mongoose'

const registroSchema = mongoose.Schema({
    name: {type: String, required: true},
    prenome: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},
{timestamps: true}
)


const postSchema = mongoose.Schema({
     
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type:String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    registros: [registroSchema],
    description: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
})

const Postagem = mongoose.model('Postagem', postSchema)

export default Postagem