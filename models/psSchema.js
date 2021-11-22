const mongoose = require('mongoose')

const PSchema = new mongoose.Schema({
    Name: {
        type: String,
         required: [true, "Please provide the information"],
    },
    Cnic: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    
    Amb: {
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
});


const Ps = mongoose.model("Ps", PSchema);

module.exports = Ps;