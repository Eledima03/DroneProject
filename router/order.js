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
    }
});

module.exports = router;
