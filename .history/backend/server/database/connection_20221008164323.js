const mongoose = require("mongoose");
const dotenv = require("dotenv");

const ConnectDB= async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
    }
}
