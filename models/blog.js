//Defining Mongoose schema for blogs
//Importing of mongoose usage
const mongoose = require("mongoose")

//Mongoose schema declaration
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

//Transforms the data id to string
blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model("Blog", blogSchema)
