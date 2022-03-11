const mongoose = require('mongoose')
const memberSchema = new mongoose.Schema({
    imageURL: {
        type: String,
    }

});
const mem_29 = mongoose.model("Mem_29", memberSchema);
module.exports = mem_29;