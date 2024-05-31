  const express = require('express');
  const router = express.Router();
  const { join } = require('path');
  const User = require('../models/users');
  const bcrypt = require('bcryptjs');

  router.get("/", (req, res) => {
    res.render(join(__dirname, "../pages/login"));
  });

  router.post("/", async (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    try{
      if(res.locals.user){  
        return res.json({
          case:false,
          message:"User already login"
        })
      }
      let {email ,password}=req.body;




  //Search in db
  

  const user = await User.findOne({ email });
  if (!user) {
    console.log("Email hatalı");

    return res.json({
      case: false,
      message: "Wrong email or password"
    });
  }


  // Parolayı karşılaştırın
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("Parola hatalı");
    return res.json({
      case: false,
      message: "Wrong email or password"
    });
  }
  req.session.userId=user._id.toString();
  console.log(user);
  return res.json({
    case: true,
    message: "Login successful"
  });
  




    }catch(err){
      console.log(err);
      return res.json({
        case:false,
        message:"Error in login page"
      })
    }

  return res.json("istek yakalandı");

  });
  /**
   *    try {
            const { email, password } = req.body;
        
            const user = await User.findOne({ email });
            if (!user) {
              return res.status(400).send('Invalid credentials');
            }
        
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
              return res.status(400).send('Invalid credentials');
            }
        
            res.status(200).send('Login successful');
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
          }
  */

  module.exports = router;
