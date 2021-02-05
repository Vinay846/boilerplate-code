const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // write your model
})

const userModel = mongoose.model("user", userSchema);


module.exports = {
    userModel: userModel
}