const express = require("express");
const connectDB = require("./config/database");
const app = express(); //calling a express func tion
const User = require('./models/user')



// by using api insert new data into databse

app.post("/signup",async (req,res)=>{
  const userObj = {
    firstName: "Ashu",
    lastName: "singh",
    email: "ashu@1234",
    password: "ashu123456",
    number: "123456789"
  }

  // creating a new instance of a user mode---

  const user = new User(userObj);
  await user.save(); //this function retun a promise
  res.send("data is saved into database");

 
})

// how to connect to the database like mongoose-----

connectDB()
  .then(() => {
    console.log("databse is created");
    app.listen(7777, () => {
      console.log("server is loading");
    });
  })
  .catch((err) => {
    console.error("databse is not connected",err);
  });

console.log("page load");










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

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log("handler route 1");
//     // res.send("successful request 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("route handler 2");
//     // res.send("successful request 2");
//     next();
//   },
//   (req, res, next) => {
//     console.log("route handler 3");
//     // res.send("successful requset 3");
//     next();
//   },
//   (req, res, next) => {
//     console.log("route handler 4");
//     // res.send("successful requset 4");
//     next();
//   }
// );


// Middleware handling request------
// GET /users => middleware chain => request handler

// app.use("/", (req,res,next) =>{
     
//     next(); //given us to express js
// });

// app.get("/user",(req,res,next)=>{
//     console.log("handler user route");
//     next();
// },
// (req,res,next)=>{
//     res.send("response successful")
// },
// (req,res,next)=>{
//     res.send("response successful 2");
// }
// );


// This is a Middlewares-------  how its work----
// const {
//   userAuthentication,
//   userGetAllData,
//   userDeleteAllData,
// } = require("./middleware/auth");

//  app.use("/admin", userGetAllData,userDeleteAllData);

// app.use("/admin",(req,res,next)=>{
//     console.log("use function call")
    // res.send("use successful")
//     next()
// })

// app.post ("/user/login",(req,res) =>{
//     res.send("user is successful")
// })
// app.get("/user/login", userAuthentication,(req,res)=>{
     //    res.send("user login successfully");
         // next();

// })
// app.get("/admin/getAllData",userGetAllData, (req,res) =>{
        // res.send("sent all the data")
// });
// app.delete("/admin/delete", userDeleteAllData,(req,res) =>{
//        res.send("delete all the data");
// });

// app.get("/admin/getDeleteData",(req,res)=>{
//     const Token = "authorizedd";
//     const authorizedUser = Token === "authorized";
//     if (!authorizedUser){
//         res.status(500).send("something went wrong");
//     } 
//     else{
//         res.send("delete all data ");
//     }
// })





// how to connect to the database like mongoose-----










