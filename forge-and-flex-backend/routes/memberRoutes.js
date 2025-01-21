const express = require('express');
const User = require('../models/membership'); // Corrected to use the User model
const router = express.Router();

// Create member
router.post('/', async (req, res) => {
    const { name, phone, email, classes, level } = req.body;
    try {
        const newMember = new User({ name, phone, email, classes, level });
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all members
router.get('/', async (req, res) => {
    try {
        const members = await User.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;


