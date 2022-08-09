const express = require("express");
const postRouter = express.Router()
const tokenVerification = require("../middleware/token.verification")
const postController = require("./post.controller")

// create post
postRouter.post("/user/post", tokenVerification, postController.createPost)

// Edit Post

module.exports = postRouter;