const Blog = require("../model/blog");

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

module.exports = {
  initialBlogs,
  blogsInDb,
};
