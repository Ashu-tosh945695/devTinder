const express = require("express");
const app = express(); //calling a express function

// app.use method use for authentication

// app.use("/", (req, res) => {
//   res.send("world");
// });

// app.use("/hello",(req,res)=>{
//     res.send("namaste dsa");
// })

// app.use("/home", (req,res)=>{
//     res.send("server is crashed");
// })

app.get("/abc", (req,res) =>{
    console.log(req.query);
    res.send({firstName: "Ashutosh",id:1234, city:"gzb"});
})
app.post("/about", (req,res) => {
  res.send("this is a post call");
});

app.use("/about",(req,res)=>{
    res.send("this is a new")
})


// get method use for routing
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });
// app.get("/about", (req, res) => {
//   res.send("About Page");
// });
app.listen(5555,()=>{
    console.log("server is loading");
});



