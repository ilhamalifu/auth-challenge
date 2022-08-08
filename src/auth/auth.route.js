require("dotenv").config();
const express = require("express");
const authRouter = express.Router();
const authController = require("./auth.controller");

authRouter.post("/auth/login",authController.authUser)

module.exports = authRouter;