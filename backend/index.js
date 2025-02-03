//yTs8GM7pFnFEIGGy

const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
//add schemas
const students = require('./models/studSchema');

//add routes
const router=require('./routes/router')

var cors=require('cors');

const app=express();



dotenv.config();


app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.Database).then(()=>{
    console.log("DATABASE Connectiom done");
}).catch((err)=>{
    console.log(err)
})

app.listen(6000);