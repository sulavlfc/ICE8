var mongoose = require("mongoose");


var tweetsSchema = new mongoose.Schema({
    name : String,
    count : Number
});


module.exports = mongoose.model("Tweets", tweetsSchema);