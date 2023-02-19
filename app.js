const express = require('express');

const app = express();
require('./db/conn');
app.use(express.json());
const dotenv = require("dotenv");
const path = require("path");
const cors=require("cors")
// 

app.use(cors())


app.use(require("./Router/auth"));
const PORT = process.env.PORT || 3000;



if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"/acm/build")))
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "acm","build","index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send("api running");
    })
}
const date=new Date();

app.listen(PORT, (req, res) => {
    console.log(`listing to port ${PORT}`);
    

});