const mongoose = require('mongoose')
const memberSchema = new mongoose.Schema({
    imageURL: {
        type: String,
    }

});
const mem_31 = mongoose.model("Mem_31", memberSchema);
module.exports = mem_31;