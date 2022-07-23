const {user_game, Sequelize} = require ("../database/models");

//get all user
const getAllUsers = async() => {
    return await user_game.findAll();
};

//find user by username 
const getUserbyUsername = async (username) => {
    return await user_game.findOne ({
        where: {username: username},
    });
};


//delete user
const deleteUser = async (userId) => {
    return await user_game.destroy ({
        where: {id:userId},
    })
};

//create new user 
const createNewUser = async (username, password) => {
    return await user_game.create ({
        username: username,
        password: password,
    });
};


//get one user
const getOneUser = async (userId) => {
    return await user_game.findOne ({
        where: {id:userId},
    });
};

//update user
const updateUser = async (userId,username,password) => {
    return await user_game.update ({
        where: {id:userId},
        username: username,
        password: password
    });
};

const userRepo = {
    getAllUsers,
    createNewUser,
    getUserbyUsername,
    deleteUser,
    updateUser,
    getOneUser
};

module.exports = userRepo;