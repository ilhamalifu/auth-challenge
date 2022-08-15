const swaggerJSDoc = require("swagger-jsdoc")

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Blog App API Collection',
        description: "Chapter 7 - FSW Wave 23",
        version: '1.0.0',
      },
    },
    apis: ['./src/*/*.route.js'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJSDoc(options);

  module.exports = openapiSpecification;