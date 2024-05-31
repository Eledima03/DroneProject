const express = require('express')
const router = express.Router()
const { join } = require('path')
const Components = require('../models/components');





router.get("/", (req, res) => {
  if (!res.locals.user) {
    return res.render(join(__dirname, "../pages/error"))
  }
  return res.render(join(__dirname, "../pages/add"))
})


router.post("/", async (req, res) => {
 try{
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(400).json({ message: 'Please provide all required fields: title, description, and price.' });
  }

  const newComponents = new Components({
    userId:req.session.userId,
    title: title,
    description: description,
    price: price
  })

  await newComponents.save().then((data)=>{
   
  }).catch(err=>{
    console.log("Errror Adding Drone");
  })

  res.status(201).json({ message: 'User successfully registered!' });


 }catch(err){
  console.log(err);
 }

})




module.exports = router;