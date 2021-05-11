const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Pensando em usar JWT 

const UserSchema = new Schema({
  name: {
      firstName: String,
      lastName: String,
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

module.exports = User;