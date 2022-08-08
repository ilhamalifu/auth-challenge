const { User } = require ("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authUser = async (req, res) => {
        const { email, password } = req.body ;
        const existUser = await User.findOne({ where: {email}, raw: true});
        // kalau gaada response not found
        if(!existUser) return res.status(404).json({message: "User not found!"});
        
    
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