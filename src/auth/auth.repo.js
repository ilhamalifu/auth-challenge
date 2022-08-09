const { User } = require ("../database/models");


const authUser = async (email,password) => {
    return await User.findOne({ where: {email}, raw: true});
}

const authRepo = {
    authUser,
}

module.exports = authRepo;
