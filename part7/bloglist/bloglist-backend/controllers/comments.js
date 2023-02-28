const router = require("express").Router();

const Comment = require("../models/comment");

router.post("/", async (request, response) => {
  const { comment } = request.body;
  const the_comment = new Comment({ comment });
  response.status(201).json(the_comment);
});

router.get("/", async (request, response) => {
  const comments = await Comment.find({}).populate("blogs", {
    title: 1,
    author: 1,
    url: 1,
    likes: 1,
  });
  response.json(comments);
});
module.exports = router  