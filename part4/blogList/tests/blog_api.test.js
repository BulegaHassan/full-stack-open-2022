const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);
const Blog = require("../model/blog");
const helper = require("./test_helper");

beforeEach(async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(helper.initialBlogs);
});

test("blogs are returned in json format", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 100000);
test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(helper.initialBlogs.length);
});
test("verify unique identifier property of blog posts is id", async () => {
  const response = await api.get("/api/blogs");
  const contentIds = response.body.map((r) => r.id);
  expect(contentIds).toBeDefined();
});
test("a valid blog post can be created ", async () => {
  const newBlog = {
    title: "testing code is tricky and fun",
    author: "hassan bulega",
    url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
    likes: 576,
  };

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

  const titles = blogsAtEnd.map((b) => b.title);
  expect(titles).toContain("testing code is tricky and fun");
});

test("likes should default to 0 if not provided ", async () => {
  const newBlog = {
    title: "testing with jest and supertester",
    author: "hassan bulega",
    url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
  };

  const resultBlog = await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);
  expect(resultBlog.body.likes).toEqual(0);
});

test("title and url are required", async () => {
  const newBlog = {
    author: "hassan bulega",
  };

  await api.post("/api/blogs").send(newBlog).expect(400);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
});

afterAll(() => {
  mongoose.connection.close();
});
