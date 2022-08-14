const express = require("express");
const { postValidation } = require("../middleware/post.validation");
const postRouter = express.Router()
const tokenVerification = require("../middleware/token.verification");
const { validate } = require("../middleware/validation");
const postController = require("./post.controller")

// Get All Post
postRouter.get("/posts", postController.getAllPost)

// Get One Post
postRouter.get("/posts/:postId", postController.getOnePost)

// create post
postRouter.post("/posts/createpost",postValidation,validate, tokenVerification, postController.createPost)

// Edit Post
postRouter.put("/posts/editPost/:postId", postValidation, validate, tokenVerification, postController.editPost);

module.exports = postRouter;