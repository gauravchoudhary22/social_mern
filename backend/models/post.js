const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: String,
    body:String,
    user:String
});

module.exports = mongoose.model("Post", PostSchema);