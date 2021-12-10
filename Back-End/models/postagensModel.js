import mongoose from 'mongoose'

const registerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
},{
    timestamps: true
})


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
    description: {
        type: String,
        required: true,
    },
    register:[registerSchema],
   
},{
    timestamps: true
})

const Postagem = mongoose.model('Postagem', postSchema)

export default Postagem