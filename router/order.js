<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const Components = require('../models/components');
const {join} = require('path')
router.get("/", async (req, res) => {
    try {
        const components = await Components.find({ userId: req.session.userId }); // Kullanıcının bileşenlerini getir
        res.render(join(__dirname,"../pages/order"), { components }); // Bileşenleri EJS şablonuna gönder
    } catch (err) {
        console.error(err);
        res.status(500).send('Sunucu Hatası');
=======
// router.js

const express = require('express');
const router = express.Router();
const Components = require('../models/components');
const {join}=require("path");

router.get("/", async (req, res) => {
    try {
        const components = await Components.find({ userId: req.session.userId }); // Kullanıcının bileşenlerini getir

        res.render(join(__dirname, "../pages/order"), { components }); // order.ejs'e bileşenleri iletilir
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
>>>>>>> 1169d3f63d3eac2b1e5a71a8da7609b1ced60d80
    }
});

module.exports = router;
