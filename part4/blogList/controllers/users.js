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
  if (!username || !password) {
    return response
      .status(400)
      .json({ error: "Provide both username and password" });
  }
  if (username.length < 3 || password.length < 3) {
    return response.status(400).json({
      error: "username or password must be atleast 3 characters long",
    });
  }
  existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: "username must be unique",
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({ name, username, passwordHash });
  const savedUser = await user.save();
  response.status(201).json(savedUser);
});

module.exports = usersRouter;
