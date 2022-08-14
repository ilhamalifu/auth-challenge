const { body } = require("express-validator");

const userValidation = [
    body("fullname").isString().notEmpty(),
    body("email").isEmail().notEmpty(),
    body("password").isString().notEmpty()
];

module.exports = {
    userValidation,
};