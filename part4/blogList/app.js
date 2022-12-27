const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const blogsRouter = require("./controllers/blogs");
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");

logger.info("connecting to", config.MONGO_URI);

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("connected to mongoDB");
  })
  .catch((error) => {
    logger.error("error connection to mongoDB:", error.message);
  });
  app.use(middleware.requestLogger);
app.use(cors());
app.use(express.json());

// app.use(middleware.tokenExtractor);
app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
