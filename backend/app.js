const express = require("express");
const app = express();
require("./conn/conn");

app.get("/", (req, res) =>{
    res.send("Hello");
})

app.listen(3000, () =>{
    console.log("Server Started");
})