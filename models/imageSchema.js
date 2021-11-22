const mongoose = require('mongoose')
const imageSchema = new mongoose.Schema({
    imageURL: {
        type: String,
    }

});
const img = mongoose.model("Img", imageSchema);
module.exports = img;