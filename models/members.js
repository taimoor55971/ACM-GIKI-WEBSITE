const mongoose = require('mongoose')
const memberSchema = new mongoose.Schema({
    imageURL: {
        type: String,
    }

});
const mem = mongoose.model("Mem", memberSchema);
module.exports = mem;