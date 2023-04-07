const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    position: { type: String, required: true },
    dishes: [{ type: String, required: true }],
});

module.exports = mongoose.model('Menu', menuSchema);