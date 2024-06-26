const express = require('express');
const path = require('path');
const app=express();
const dotenv = require('dotenv')
const session = require('express-session');
app.use(express.static(path.join(__dirname, 'public')))
const conn = require(path.join(__dirname, 'db.js')) 


conn();
// Set up session middleware
app.set('view engine', 'ejs');

app.use(session({
    secret: 'your-secret-key', // Bu anahtarı gizli tutun ve daha güvenli bir değer kullanın
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // HTTPS kullanıyorsanız secure: true yapın
  }));
app.use(express.json());

//! We can check the person login or dont login
app.use('/', (req, res, next) => {
    const { userId } = req.session;
    if (userId) {
        res.locals.user = true;
    } else {
        res.locals.user = false;
    }
    next();
});

//Routers

const login = require('./router/loginPage.js');
const home = require('./router/homePage.js');
const components= require('./router/componentsPage.js');
const signup = require('./router/registerPage.js');
const add=require("./router/add.js")
const order=require("./router/order.js")
const statistic=require("./router/statistic.js")

app.use("/",home)
app.use("/index",home);
app.use('/signup', signup);
app.use("/login",login);
app.use("/add",add);
app.use("/order",order);
app.use("/statistic",statistic);
app.use("/components",components);
app.use("/logout",(req,res)=>{
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect("/"); // Logout işlemi tamamlandıktan sonra ana sayfaya yönlendirme yapılır
    });
});


app.listen(3000,()=>{
    console.log("http://localhost:3000");
})