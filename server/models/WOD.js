const mongoose = require('mongoose');

const WODSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true }
});

module.exports = mongoose.model('WOD', WODSchema);
