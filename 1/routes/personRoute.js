const express = require('express');
const router = express.Router()
const Person = require('../models/person')

router.post('/',async(req,res)=>{
    try {
            const data  = req.body // Assuming the request body contain the person data
        // create a new person document using the Mongoose model
        const newPerson = new Person(data);
        // save the new person to the database
        const savedPerson = await newPerson.save()
        console.log("data saved");
        res.status(200).json(savedPerson)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
})

router.get('/',async (req,res)=>{
    try {
        const data = await Person.find()
        console.log("data fetched");
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
})

router.get('/:work',async (req,res)=>{
    try {
        const worktype = req.params.work
        if(worktype=="chef" || worktype=='manager' || worktype=="waiter" ){
            const response = await Person.find({work: worktype})
            console.log("response fetched");
            res.status(200).json(response)
            
        }
        else{
            res.status(404).json({error:"Invalid work type"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"inretnal server error"})
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id
    const updateedPersonData = req.body

    const response = await Person.findByIdAndUpdate(personId,updateedPersonData,{
        new:true,
        runValidators:true
    })

    if(!response){
        res.status(404).json({error:"Person not found"})
    }

    console.log("data updated");
    res.status(200).json(response)
    
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"inretnal server error"})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const personId = req.params.id
    const response = await Person.findByIdAndDelete(personId)

    if(!response){
        res.status(404).json({error:"Person not found"})
    }
    console.log("data deleted");
    res.status(200).json({message:"person deleted Successfully"})
    
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"inretnal server error"})
    }
})
// comment added for testing purposes
module.exports=router