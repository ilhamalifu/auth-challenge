const authRepo = require("./auth.repo")

const authUser = async (email,password) => {
    return await authRepo.authUser(email, password);
}

const authService = {
    authUser,
}

module.exports = authService;