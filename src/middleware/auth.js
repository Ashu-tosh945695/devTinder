
const userAuthentication = (req,res,next)=>{
    const Token = "Ashu";
    const authorized = Token === "Ashu";
    if(authorized ){
        res.send("this ia a authorized user");
    }else{
        res.status(500).send("something went wrong please try again");
    };
};

const userGetAllData = (req,res,next )=>{
    const Token = "singhh";
    const userAuthorized = Token === "singh";
    if(userAuthorized){
        res.send("user is authorized, 1 send all the data");
    }else{
        //res.status(500).send("something went wrong")
        next();
    }
}
const userDeleteAllData = (req, res, next) => {
  const Token = "xyz";
  const userAuthorized = Token === "xyz";
  if (userAuthorized) {
    res.send("user is authorized, delete all the data");
  } else {
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  userAuthentication,
  userGetAllData,
  userDeleteAllData,
};