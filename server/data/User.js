const mongoose = require('mongoose')
const encription = require('../utilities/encriptions')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  firsName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  lastName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  salt: { type: String },
  hashedPass: { type: String },
  roles: [String]
})

userSchema.method({
  authenticate: (password) => {
    if(encription.generateHashedPassword(this.salt, password === this.hashedPass)) {
      return true
    } else {
      return false
    }
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User