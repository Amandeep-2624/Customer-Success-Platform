const express = require('express');
const router = express.Router();

const {CreateRiskProfile,GetRiskProfiles,GetRiskProfileById,UpdateRiskProfile,DeleteRiskProfile}=require("../controllers/RiskProfile");

// Create risk profile entry
router.post('/risk-profiles',CreateRiskProfile);

// Read all RiskProfile for a project
router.get('/risk-profiles/:projectId',GetRiskProfiles);

// Read a specific risk profile by ID
router.get('/risk-profiles/:id', GetRiskProfileById);

// Update risk profile entry
router.put('/risk-profiles/:id',UpdateRiskProfile);

// Delete risk profile entry
router.delete('/risk-profiles/:id',DeleteRiskProfile);

module.exports = router;
