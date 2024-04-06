const express = require('express');
const router = express.Router();
const {CreateEscalation,GetEscalation,UpdateEscaltion,DeleteEscalation}=require("../controllers/EscalationMatrix");

// Create escaltion matrix entry
router.post('/escalation-matrix',CreateEscalation);

// Read all escaltion matrix entries for a project
router.get('/escalation-matrix/:projectId',GetEscalation );

// Update escaltion matrix entry
router.put('/escalation-matrix/:id',UpdateEscaltion);

// Delete escaltion matrix entry
router.delete('/escalation-matrix/:id',DeleteEscalation);

module.exports = router;
