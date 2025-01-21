const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    classes: { type: [String], required: true },
    level: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);
