const blogsRouter = require("express").Router();
const { restart } = require("nodemon");
const Blog = require("../model/blog");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const { title, url } = body;
  if (!title || !url) {
    return response.status(400).end();
  }
  const blog = new Blog(body);
  try {
    const savedBlog = await blog.save();

    response.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
});
blogsRouter.delete('/:id', async (request,response)=> {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})
module.exports = blogsRouter;
