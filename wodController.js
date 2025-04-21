const WOD = require('../models/WOD');

// Add a new WOD
exports.addWOD = async (req, res) => {
    const { title, description, duration } = req.body;
    const wod = new WOD({ title, description, duration });

    try {
        await wod.save();
        res.status(201).json({ message: 'WOD added' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding WOD' });
    }
};

// Get all WODs
exports.getAllWODs = async (req, res) => {
    try {
        const wods = await WOD.find();
        res.status(200).json(wods);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching WODs' });
    }
};

// Delete a WOD
exports.deleteWOD = async (req, res) => {
    try {
        await WOD.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'WOD deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting WOD' });
    }
};
