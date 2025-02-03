//yTs8GM7pFnFEIGGy

const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
//add schemas
const students = require('./models/studSchema');

var cors=require('cors');

const app=express();



dotenv.config();


app.use(cors());

mongoose.connect(process.env.Database).then(()=>{
    console.log("DATABASE Connectiom done");
}).catch((err)=>{
    console.log(err)
})

app.listen(6000);