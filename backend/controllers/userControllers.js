const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = expressAsyncHandler(async (req,res) => {
    const { name,email,password,photo} = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields");
    }

    const userExists = await User.findOne({ email});

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        photo,
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            photo: user.photo,
        })
    } else {
        res.status(404);
        throw new Error("Failure in Creating User");
    }
});


module.exports = { registerUser };