const express = require('express')
const router = express.Router()
const {join} = require('path')





router.get("/",(req,res)=>{
     res.render(join(__dirname,"../pages/index"))
});



module.exports=router;