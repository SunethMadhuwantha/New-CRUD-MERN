const express = require('express');
const students = require('../models/studSchema');
const router = express.Router()

//post api
router.post("/addstud",async(req,res)=>{
    console.log(req.body);

    const {name,address,subject,mobile}=req.body;
    if(!name || !address || !subject || !mobile){
        res.status(404).json("Please fill data");
    }
    try {
        const prestud = await students.findOne({mobile:mobile});
        if(prestud){
            return res.status(404).json("Student already exists");
        }
        else{
            const addstudent=new students({name,address,subject,mobile});
            await addstudent.save();
            res.status(201).json(addstudent);
        }
        
    } catch (err) {
        res.status(404).json(err);
        
    }


})


module.exports=router;