const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/',function(req,res){
    res.send('welcome to my server!')
})

app.get('/hacking-course',function(req,res){
    var details = {
        name:"Ethical hacking",
        duration:"60 hours",
        price:1000,
        level:"Easy"
    }
    res.send(details)
})





// GET method to get the person




// Import the router files
const personRoutes = require('./routes/personRoute')
const menuItemRoutes = require('./routes/menuRoute')

// use the routers
app.use('/person',personRoutes)
app.use('/menuitem',menuItemRoutes)

app.listen(3000,()=>{
    console.log("listening on port 3000");
    
})