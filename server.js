const express = require("express")
const app = express()
const mongoose = require("mongoose")









mongoose.connect('mongodb://localhost:27017/crud').then(() => {
  console.log('Connected to MongoDB');
  // The rest of your code here
  app.listen(4000, ()=> {
    console.log("server ")
})
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});