const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))
let port = process.env.PORT || 3000
module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/blogsystemtempl',
    port: port
  },
  production: {
    port: port
  },
  staging: {

  }
}