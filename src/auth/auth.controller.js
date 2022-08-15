const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("./auth.service")

const authUser = async (req, res) => {
        const { email, password } = req.body ;
        const existUser = await authService.authUser(email,password);
        if (!existUser) {
          return res.send("User tidak ditemukan")
        }
        // kalau ada, cek passwordnya
        const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
        if(isPasswordCorrect){
            // generate jwt token
            const token = await jwt.sign(
                {
                  id: existUser.id,
                  fullname: existUser.fullname,
                  email: existUser.email,
                },
                process.env.JWT_SECRET_TOKEN,
                { expiresIn: "1d" }
              );
            return res.json({accessToken:token});
        } else {
            return res.send("Login Failed");
        }
}

const authController = {
  authUser,
}

module.exports = authController;