require("dotenv").config();
const express = require("express");
const userRouter = require("./src/user/user.route");
const tokenVerification = require("./middleware/token.verification")
const authRouter = require("./src/auth/auth.route");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/",tokenVerification, (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);
app.use(authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
