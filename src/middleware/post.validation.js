const { body } = require("express-validator");

const postValidation = [
    body("title").isString().notEmpty(),
    body("image").isString().notEmpty(),
    body("body").isString().notEmpty(),
];

module.exports = {
    postValidation,
};