const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

mongoose.model("User", userSchema)

