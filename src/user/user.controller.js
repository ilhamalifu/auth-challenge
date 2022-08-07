const userService = require("./user.service");

const createUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
      const recordUser = await userService.createUser({ 
        fullname, 
        email, 
        password,
    });
      return res.json(recordUser);
    } catch (error) {
      return res.status(500).json({ message: "Create user failed!" });
    }
  };

const userController = {
    createUser,
}

module.exports = userController;