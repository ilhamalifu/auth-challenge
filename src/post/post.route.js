const express = require("express");
const { postValidation } = require("../middleware/post.validation");
const postRouter = express.Router()
const tokenVerification = require("../middleware/token.verification");
const { validate } = require("../middleware/validation");
const postController = require("./post.controller")

// Get All Post
postRouter.get("/posts", postController.getAllPost)

// Get One Post
postRouter.get("/posts/:post_id", postController.getOnePost)

// create post

/**
 * @swagger 
 * /posts/createpost:
 *  post:
 *      summary : API to create new post
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          image:
 *                              type: string
 *                          body:
 *                              type:string
 *      response:
 *          '200':
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: int
 *                              title:
 *                                  type: string
 *                              image:
 *                                  type: string
 *                              body:
 *                                  type: string
 *                              updateAt:
 *                                  type: string
 *                              createdAt: 
 *                                  type: string
 */
postRouter.post("/posts/createpost",postValidation, validate, tokenVerification, postController.createPost)

// Edit Post
postRouter.put("/posts/editPost/:post_id", postValidation, validate, tokenVerification, postController.editPost);

module.exports = postRouter;