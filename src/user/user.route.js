const express = require("express");
const { userValidation } = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const userRouter = express.Router();
const userController = require("./user.controller");

/**
 * @swagger 
 * /user/registration:
 *  post:
 *      summary : API to create user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullname:
 *                              type: string
 *                          username:
 *                              type: string
 *                          password:
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
 *                              fullname:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              updateAt:
 *                                  type: string
 *                              createdAt: 
 *                                  type: string
 */
userRouter.post("/user/registration",userValidation, validate ,userController.createUser);
 
module.exports = userRouter;