const express = require("express");
const { postValidation } = require("../middleware/post.validation");
const postRouter = express.Router()
const tokenVerification = require("../middleware/token.verification");
const { validate } = require("../middleware/validation");
const postController = require("./post.controller")

// Get All Post
/**
 * @swagger
 * /post/getallpost:
 *  get:
 *    summary: API to get all post
 *    parameters:
 *      - in: query
 *        name: limit
 *        required: false
 *        schema:
 *          type: integer
 *        description : how many data that show in one page
 *      - in: query
 *        name: page
 *        required: false
 *        schema:
 *          type: integer
 *        description : which page we wanna see
 *      - in: query
 *        name: writer
 *        required: false
 *        schema:
 *          type: integer
 *        description : to get spesific post with user id
 *      - in: query
 *        name: title
 *        required: false
 *        schema:
 *          type: string
 *        description : to get spesific post with title
 *      - in: query
 *        name: order
 *        required: false
 *        schema:
 *          type: string
 *        description : ordering Query can be 'ASC' or 'DESC'
 *    description: API to get all post item
 *    requestBody:
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                title:
 *                  type: string
 *                image:
 *                  type: string
 *                body:
 *                  type: string
 *                user_id:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */
postRouter.get("/post/getallpost", postController.getAllPost)

// create post
/**
 * @swagger 
 * /post/createpost:
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
postRouter.post("/post/createpost",postValidation, validate, tokenVerification, postController.createPost)

// Edit Post
postRouter.put("/post/editpost/:postId",postValidation, validate, tokenVerification, postController.editPost);

// Get One Post
postRouter.get("/post/:postId", postController.getOnePost)

module.exports = postRouter;