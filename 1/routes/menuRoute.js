const express = require('express')
const router = express.Router()

const MenuItem = require('../models/MenuItem')

router.post('/',async (req,res)=>{
    try {
        const data  = req.body
        const newmenuitem = new MenuItem(data)
        const savemenuitem = await newmenuitem.save()
        console.log("menuitem data saved");
        res.status(200).json(savemenuitem)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"})
        
    }
})

router.get('/',async (req,res)=>{
    try {
        const data = await MenuItem.find()
        console.log("data fetched");
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"inretnal server error"})
    }
})

router.get('/:taste',async (req,res)=>{
        try {
            const tasteType = req.params.taste
            if(tasteType=="sweet"||tasteType=="spicy"||tasteType=="sour"){
                const response = await MenuItem.find({taste:tasteType})
                console.log("response fetched");
                res.status(200).json(response)
            }
            else{
                res.status(404).json({error:"invalid taste type"})
            }
        } catch (error) {
            console.log(error);
        res.status(500).json({error:"inretnal server error"})
        }
})

module.exports=router