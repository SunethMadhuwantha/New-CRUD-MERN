//yTs8GM7pFnFEIGGy

const express= require('express');
const mongoose= require('mongoose');
var cors=require('cors');

const app=express();


app.use(cors());

mongoose.connect("mongodb+srv://Admin1:J7pzhytu3iJXL1rX@cluster0.xrmrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connectiom done");
}).catch((err)=>{
    console.log(err)
})

app.listen(6000);