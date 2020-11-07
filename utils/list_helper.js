const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 1) {
    return blogs[0].likes
  } else {
    return blogs.map((p) => p.likes).reduce((sum, value) => sum + value, 0)
  }
}

const favoriteBlog = (blogs) => {
  const max = blogs.reduce((prevBlog, currentBlog) =>
    prevBlog.likes > currentBlog.likes ? prevBlog : currentBlog
  )
  const favouriteBlog = {
    title: max.title,
    author: max.author,
    likes: max.likes,
  }
  return favouriteBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
