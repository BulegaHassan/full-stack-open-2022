const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../model/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.status(200).json(users);
});

usersRouter.post("/", async (request, response) => {
  const body = request.body;
  const { name, username, password } = body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({ name, username, passwordHash });
  const savedUser = await user.save();
  response.status(201).json(savedUser);
});

module.exports = usersRouter;
