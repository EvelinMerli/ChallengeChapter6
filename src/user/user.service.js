const userRepo = require("./user.repo");

//get all user
const getAllUsers = async () => {
    return await userRepo.getAllUsers();
};

//delete user
const deleteUser = async (userId) => {
    if (userId !=1) {
        return await userRepo.deleteUser(userId);
    } else {
        return "Cannot be delete";
    }
};

//create new user
const createNewUser = async (username, password) => {
    const userExist = await userRepo.getUserbyUsername(username);
    if (!userExist) {
        return await userRepo.createNewUser(username,password);
    } else {
        return "User is already exist.";
    }
};

//get one user
const getOneUser = async (id) => {
    return await userRepo.getOneUser(id);
};

//update user
const updateUser = async (userId,username, password) => {
        return await userRepo.updateUser(userId,username,password);
    };



const userService = {
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUser,
    getOneUser
};

module.exports = userService;

