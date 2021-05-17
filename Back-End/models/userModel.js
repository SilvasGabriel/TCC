//Importe o mongoose para modelar o banco de dados
const mongoose = require('mongoose');
//Importe o bcriptjs para dar um hash nas senhas
const bcript = require('bcryptjs')

const UserSchema = new Schema({
  name: {
      type:String,
      required: true
  },
  email: {
      type: String,
      required: true,
      trim: true,
      unique:true
  },
  telephone: {
      type: Number,
      min:10,
      max:12
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
      type: Boolean,
      required: true,
      default:false
  },
  DoYouStudyOnUniversity: {
      sim: {
        type: Boolean,  
        default:false,
        numberRegistration: Number
      },
      nao: {
        type: Boolean, 
        default:true,
      }
  },

})

const User = mongoose.model('user', UserSchema)

//Checar a senha,salvar e hash

UserSchema.methods.matchPassword = async function (enteredPassword){
  return await bcript.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next){
  if(!this.isModified('password')){
    next()
  }

  const salt = await bcript.genSalt(10)
  this.password = await bcript.hash(this.password, salt)

})

module.exports = User;