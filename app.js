const express = require('express');

const app = express();
require('./db/conn');
app.use(express.json());
const dotenv = require("dotenv");
const path = require("path");
// 




app.use(require("./Router/auth"));
const PORT = process.env.PORT || 3000;
// app.get("/", (req, res) => {
//     res.send("hello to backend");
// })
 

// if ( process.env.NODE_ENV == "production"){

//     app.use(express.static("acm/build"));

//     const path = require("path");

//     app.get("*", (req, res) => {

//         res.sendFile(path.resolve(__dirname, 'acm', 'build', 'index.html'));

//     })


//}


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


app.listen(PORT, (req, res) => {
    console.log(`listing to port ${PORT}`);
});