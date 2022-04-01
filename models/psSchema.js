const mongoose = require('mongoose')

const PSchema = new mongoose.Schema({
    Name: {
        type: String,
         required: [true, "Please provide the information"],
    },
    Cnic: {
        type: String,
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
        type: String,
         required: [true, "Please provide the information"],
    },
    Email: {
        type: String,
         required: [true, "Please provide the information"],
    },
     Hackathon: {
        type: Boolean,
        
        
    },
    Graphic_Designing_Competition:
        { type: Boolean },
    WEB_DEVELOPMENT:
        { type: Boolean },
    APP_DEVELOPMENT:
        { type: Boolean },
    Quiz: {
        type: Boolean,
        
    },
    Poster: {
        type: Boolean,
        
    },
    Startup: {
        type: Boolean,
        
    }
},{
    timestamps: true
});


const Ps = mongoose.model("Ps", PSchema);

module.exports = Ps;