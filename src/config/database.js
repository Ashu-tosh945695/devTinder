
const mongoose = require('mongoose');

const connectDB = async () =>{
   await mongoose.connect(
     "mongodb+srv://aahutosh985_db_user:0y24hsXrrk4RXmaW@namastenode.raoyo5i.mongodb.net/devTinder"
   );
}
module.exports = connectDB;




