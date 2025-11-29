require('dotenv').config();

const mongoose = require("mongoose");
const DB_NAME = require("../constant.js");

console.log(process.env);






const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://ashishgautam7696_db_user:dq8VwOD2nL1K3RyR@cluster0.fcmgnj0.mongodb.net/Akash")
        console.log(`MONGODB CONNECTED !! DB HOST `)

    }
    catch(error){
        console.log("ERROR :" ,error);
        process.exit(1)
    }
}

module.exports = connectDB;