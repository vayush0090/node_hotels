var notes = require('./notes.js')
console.log("server file is available");

var age= notes.age
console.log(age);
const addNumber =notes.addNumber(10,46)
console.log(addNumber);




// var fs =require('fs');
// var os= require('os');

// const user =os.userInfo()
// console.log(user);

// fs.appendFile('greeting.txt',"hi hello what's up!!\n",()=>console.log("file is created!!!")
// )