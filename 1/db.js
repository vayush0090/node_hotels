const mongoose = require('mongoose');

// define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // hotels is database name

// set up mongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// get the default connection
//mongoose maintains a default connection  object representing the mongoDB connection
const db= mongoose.connection

// define event listeners for database connection
db.on('connected',()=>{
    console.log("Connected to mongoDB Sever");
})

db.on('error',(err)=>{
    console.error("mongodb connection error",err);
})

db.on('disconnected',()=>{
    console.log("monodb disconnected");
})

// export the database connection
module.exports=db