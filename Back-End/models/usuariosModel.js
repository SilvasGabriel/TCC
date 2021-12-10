import mongoose from 'mongoose'
import bcriptjs from 'bcryptjs'


const userSchema = mongoose.Schema({
    
    name: { type:String, required: true},
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
    },
    password: {type: String,  required: true,},
    telefone: {type:String  , required:false,},
    faculdade:{type:String , required:false,},
    matricula:{type:String , required:false,},
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    }

}, {
    timestamps: true
})

//Comparar se as senhas batem no sistema
userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcriptjs.compare(enteredPassword, this.password)
}

//Encriptar a senha
userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }

    const salt = await bcriptjs.genSalt(10)
    this.password = await bcriptjs.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User