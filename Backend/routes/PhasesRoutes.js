const express = require('express');
const router = express.Router();
const {CreatePhase,GetPhases,GetPhase,UpdatePhase,DeletePhase}=require("../controllers/Phases");

// Create phase entry
router.post('/phases',CreatePhase);

// Read all phases for a specific project
router.get('/phases/:projectId',GetPhases);

// Read a specific phase by ID
router.get('/phases/:id',GetPhase );

// Update phase entry
router.put('/phases/:id',UpdatePhase);

// Delete phase entry
router.delete('/phases/:id',DeletePhase);

module.exports = router;
