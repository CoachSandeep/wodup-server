const express = require('express');
const WOD = require('../models/WOD');
const router = express.Router();

// Add a new WOD
router.post('/', async (req, res) => {
    const { title, description, duration } = req.body;
    const wod = new WOD({ title, description, duration });
    
    try {
        await wod.save();
        res.status(201).json({ message: 'WOD added' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding WOD' });
    }
});

// Get all WODs
router.get('/', async (req, res) => {
    try {
        const wods = await WOD.find();
        res.status(200).json(wods);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching WODs' });
    }
});

// Delete a WOD
router.delete('/:id', async (req, res) => {
    try {
        await WOD.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'WOD deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting WOD' });
    }
});

module.exports = router;
