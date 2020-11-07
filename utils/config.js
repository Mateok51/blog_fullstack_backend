//Imports environemtal variables in env file
require("dotenv").config()

//Environmental variable for url
const mongoUrl = process.env.MONGODB_URI
//Port declaration
const PORT = process.env.PORT

module.exports = {
  mongoUrl,
  PORT,
}
