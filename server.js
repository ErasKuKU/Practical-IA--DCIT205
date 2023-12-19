const express = require("express")
const app = express()
const mongoose = require("mongoose")





const express= require('express')
const mongoose = require('mongoose')
const visit = require('./models/visitModel')
const register = require('./models/registerModel')
const data = require('./models/dataModel')




app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Node API')
})
app.post ('/visitaion',async(req, res) =>{
    try{
       const visit = await visit.create(req.body)
       res.status(200).json(visit);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
app.post ('/data',async(req, res) =>{
    try{
       const data = await data.create(req.body)
       res.status(200).json(data);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
app.post ('/register',async(req, res) =>{
    try{
       const register = await register.create(req.body)
       res.status(200).json(register);
    } catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})




mongoose.connect('mongodb+srv://erasmusmensah2005:in010706405319@cluster.klgulvc.mongodb.net/Node-APIretryWrites=true&w=majority')
.then(()=> {
    console.log('connected to MongoDB')
    app.listen(4000,()=>{
        console.log(`Node API app is running on port 4000`)
    })  
    
}).catch((error)=>{
    console.log(error)
})



mongoose.connect('mongodb://localhost:27017/crud').then(() => {
  console.log('Connected to MongoDB');
  // The rest of your code here
  app.listen(4000, ()=> {
    console.log("server ")
})
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
