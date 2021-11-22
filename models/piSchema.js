const mongoose = require('mongoose')

const PIchema = new mongoose.Schema({
    NameL: {
        type: String,
         required: [true, "Please provide the information"],
    },
    CNICL: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    
    
   
    UniversityL: {
        type: String,
         required: [true, "Please provide the information"],
    },
    Tname: {
        type: String,
         required: [true, "Please provide the information"],
    },
    MobileL: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    EmailL: {
        type: String,
         required: [true, "Please provide the information"],
    },

     //Member 1
    
    Name1: {
        type: String,
         required: [true, "Please provide the information"],
    },
    CNIC1: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    
    
   
    University1: {
        type: String,
         required: [true, "Please provide the information"],
    },
    
    Mobile1: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    Email1: {
        type: String,
         required: [true, "Please provide the information"],
    },
    //Memeber2

    Name2: {
        type: String,
         required: [true, "Please provide the information"],
    },
    CNIC2: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    
    University2: {
        type: String,
         required: [true, "Please provide the information"],
    },
    
    Mobile2: {
        type: Number,
         required: [true, "Please provide the information"],
    },
    Email2: {
        type: String,
         required: [true, "Please provide the information"],
    }
});


const Pi = mongoose.model("Pi", PIchema);

module.exports = Pi;