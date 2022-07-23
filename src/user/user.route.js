const express = require("express");
// const userController = require ("./user.controller");
const userService = require("./user.service");
const userRouter = express.Router();

//get all user
userRouter.get ("/users", async (req,res)=> {
    const users = await userService.getAllUsers ();
    res.json(users);
});

//delete user
userRouter.delete("/users/:id", async (req,res) => {
    const {id} = req.params;
    const deleteUser = await userService.deleteUser(id);
    res.json(deleteUser);
});

//create new user
userRouter.post ("/users", async (req,res)=> {
    const {username, password} = req.body;
    const newUser = await userService.createNewUser (username,password);
    res.json(newUser);
});

//get one user
userRouter.get ("/users/:id", async (req,res)=> {
    const {id} = req.params;
    const users = await userService.getOneUser(id);
    res.json(users);
});

//update user
userRouter.put ("/users/:id", async (req,res) => {
    let userId = req.params.id;
    const {username, password} = req.body;
    const updateUser = await userService.updateUser(userId,username,password);
    res.json(updateUser);
});

module.exports = userRouter;