require("dotenv").config();
const express = require("express");
const { authValidation } = require("../middleware/auth.validation");
const { validate } = require("../middleware/validation");
const authRouter = express.Router();
const authController = require("./auth.controller");


/**
 * @swagger 
 * /auth/login:
 *  post:
 *      summary : API to authenticate user or login
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
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
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              updateAt:
 *                                  type: string
 *                              createdAt: 
 *                                  type: string
 */
authRouter.post("/auth/login",authValidation, validate , authController.authUser)

module.exports = authRouter;