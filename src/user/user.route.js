const express = require("express");
const { userValidation } = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const userRouter = express.Router();
const userController = require("./user.controller");

userRouter.post("/user/registration",userValidation, validate ,userController.createUser);
 


module.exports = userRouter;