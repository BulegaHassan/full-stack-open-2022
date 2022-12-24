const blogsRouter = require("express").Router();

const Blog = require("../model/blog");
const User = require("../model/user");
// get all blogs
blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
  response.json(blogs);
});
// get all posts
blogsRouter.post("/", async (request, response) => {
  const body = request.body;
  const { title, url, author, likes } = body;
  if (!title || !url) {
    return response.status(400).end();
  }
  const users = await User.find({});
  const user = users[0];
  const blog = new Blog({
    url,
    title,
    author,
    likes,
    user: user._id,
  });

  const savedBlog = await blog.save();

  user.blogs = user.blogs.concat(savedBlog._id);

  await user.save();
  response.status(201).json(savedBlog);
});
//delete a post
blogsRouter.delete("/:id", async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id);
  response.status(204).end();
});
// update a post
blogsRouter.put("/:id", async (request, response) => {
  const body = request.body;
  const id = request.params.id;
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };
  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
  response.json(updatedBlog);
});
module.exports = blogsRouter;
