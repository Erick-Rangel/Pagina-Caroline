const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    employeeId: { type: Number, required: true },
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);