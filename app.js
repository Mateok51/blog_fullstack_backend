//Importing of cors usage
const cors = require("cors")
//Importing of express usage
const express = require("express")
//Import of blog routing controller
const blogsRouter = require("./controllers/blogs")
//Import of environmental variable declaration
const config = require("./utils/config")
//Importing of mongoose usage
const mongoose = require("mongoose")

//Connection to mongoDB configuration
console.log("connecting to", config.mongoUrl)
//Mongoose configuration
mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message)
  })

//Declaring the main app to use express usage
const app = express()
//Set app so that it uses express to json function
app.use(express.json())
//Set app to use cors functionality
app.use(cors())
//Set app to use routing functionality
app.use("/api/blogs", blogsRouter)

module.exports = app
