const Blog = require("../model/blog");
const User = require('../model/user')
const initialBlogs = [
  {
    title: "fsopen done",
    author: "matt finland",
    url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
    likes: 123,
  },
  {
    title: "fsopen is awesome",
    author: "hassan uganda",
    url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
    likes: 121,
  },
];
const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};
const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};
module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb
};
