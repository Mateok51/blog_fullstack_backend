//Configurating the routing of getting, deleting and updating data
const blogsRouter = require("express").Router()
const Blog = require("../models/blog")

//Gets all the data saved in the database using express
blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

//Get the date of one input depending on the id
blogsRouter.get("/:id", (request, response) => {
  Blog.findById(request.params.id).then((blog) => {
    response.json(blog)
  })
})

//Adds new data to database using express
blogsRouter.post("/", (request, response) => {
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})

module.exports = blogsRouter
