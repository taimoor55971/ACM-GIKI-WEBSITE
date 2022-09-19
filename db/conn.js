const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
// config.envC:\Users\hp\OneDrive\Desktop\ACM maga Project\backend\config.env
const uri = process.env.MONGODB_URI;
mongoose.connect( uri, {
  useNewUrlParser: true, 

useUnifiedTopology: true 
}).then(() => {
    console.log(`connection established`);
}).catch(err => {
    console.log(`connection error: ${err}`);
})
