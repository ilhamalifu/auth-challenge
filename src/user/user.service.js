const bcrypt = require("bcrypt");
const userRepo = require("./user.repo");

const createUser = async ({ fullname, email, password }) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return userRepo.createUser({ fullname, email, password:hashPassword})
}

const userService = {
    createUser,
}

module.exports=userService;