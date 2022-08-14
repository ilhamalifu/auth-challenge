const { body } = require("express-validator");

const authValidation = [
    body("email").isEmail().notEmpty(),
    body("password").isString().notEmpty()
];

module.exports = {
    authValidation,
};