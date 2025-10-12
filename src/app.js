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

// app.get("/abc", (req,res) =>{
//     console.log(req.query);
//     console.log(request.params)
//     res.send({firstName: "Ashutosh",id:1234, city:"gzb"});
// })
// app.post("/about", (req,res) => {
//   res.send("this is a post call");
// });

// app.use("/about",(req,res)=>{
//     res.send("this is a new")
// })


// get method use for routing
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });
// app.get("/about", (req, res) => {
//   res.send("About Page");
// });


// handle multiple route handler inside the app.use method----

app.use(
  "/user",
  (req, res, next) => {
    console.log("handler route 1");
    // res.send("successful request 1");
    next();
  },
  (req, res, next) => {
    console.log("route handler 2");
    // res.send("successful request 2");
    next();
  },
  (req, res, next) => {
    console.log("route handler 3");
    // res.send("successful requset 3");
    next();
  },
  (req, res, next) => {
    console.log("route handler 4");
    res.send("successful requset 4");
  }
);


app.listen(5555,()=>{
    console.log("server is loading");
});



