const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please provide the information"],
    },
    Cnic: {
        type: Number,
        required: [true, "Please provide the information"],
    },
   
    Address: {
        type: String,
        required: [true, "Please provide the information"],
    },
    University: {
        type: String,
        required: [true, "Please provide the information"],
    },
    Mobile: {
        type: Number,
         required: [true, "Please provide the information"],
    },
     Email: {
        type: String,
         required: [true, "Please provide the information"],
    },
    Participants: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    Hackathon: {
        type: Boolean,
        
        
    },
    Quiz: {
        type: Boolean,
        
    },
    Poster: {
        type: Boolean,
        
    },
    Startup: {
        type: Boolean,
        
    }


})


const Amb = mongoose.model("Amb", userSchema);

module.exports = Amb;