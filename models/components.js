    const mongoose = require('mongoose');

    const componentSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Kullanıcı modeline referans
            required: true
        },
        title: {
            type: [String], // String tipinde bir dizi (array)
            required: false
        },
        description: {
            type: [String], // String tipinde bir dizi (array)
            required: false
        },
        price: {
            type: [String], // String tipinde bir dizi (array)
            required: false
        }
    });

    const Components = mongoose.model('components', componentSchema);

    module.exports = Components;
