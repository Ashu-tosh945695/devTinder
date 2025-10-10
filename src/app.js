const express = require("express");
const app = express(); //calling a express function

app.use("/",(req,res)=>{
    res.send("world");
});

app.use("/hello",(req,res)=>{
    res.send("namaste dsa");
})

app.use("/home", (req,res)=>{
    res.send("ser is crashed");
})

app.use("/about",(req,res)=>{
    app.send("this is a new")
})
app.listen(5555,()=>{
    console.log("server is loading");
});



