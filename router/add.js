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
<<<<<<< HEAD
=======

>>>>>>> 1169d3f63d3eac2b1e5a71a8da7609b1ced60d80
  const newComponents = new Components({
    userId:req.session.userId,
    title: title,
    description: description,
    price: price
  })
<<<<<<< HEAD
  await newComponents.save().then((data)=>{
   console.log(`${data}`);
  }).catch(err=>{
    console.log("Errror Adding Drone" +err);
=======

  await newComponents.save().then((data)=>{
   
  }).catch(err=>{
    console.log("Errror Adding Drone");
>>>>>>> 1169d3f63d3eac2b1e5a71a8da7609b1ced60d80
  })

  res.status(201).json({ message: 'User successfully registered!' });

<<<<<<< HEAD
=======

>>>>>>> 1169d3f63d3eac2b1e5a71a8da7609b1ced60d80
 }catch(err){
  console.log(err);
 }

})

<<<<<<< HEAD
=======



>>>>>>> 1169d3f63d3eac2b1e5a71a8da7609b1ced60d80
module.exports = router;