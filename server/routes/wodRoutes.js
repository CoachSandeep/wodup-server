const express = require('express');
const { addWOD, getAllWODs, deleteWOD } = require('../controllers/wodController');
const router = express.Router();

// Add a new WOD
router.post('/', addWOD);

// Get all WODs
router.get('/', getAllWODs);

// Delete a WOD
router.delete('/:id', deleteWOD);

module.exports = router;
