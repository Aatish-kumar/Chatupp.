const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    pic: {type:String, required:true, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSp3X5twUbATtsDmS-7RQnmlyDWomiHHRXg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSp3X5twUbATtsDmS-7RQnmlyDWomiHHRXg&usqp=CAU"},
},
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;