require("dotenv").config();
const express = require("express");
const { authValidation } = require("../middleware/auth.validation");
const { validate } = require("../middleware/validation");
const authRouter = express.Router();
const authController = require("./auth.controller");

authRouter.post("/auth/login",authValidation, validate , authController.authUser)

module.exports = authRouter;