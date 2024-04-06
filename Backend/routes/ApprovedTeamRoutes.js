const express = require('express');
const router = express.Router();
const {CreateApprovedTeam,GetAppovedTeam,UpdateApprovedTeam,DeleteApprovedTeam}=require("../controllers/ApprovedTeams")

// Create approved Team entry
router.post('/approved-team',CreateApprovedTeam);

// Read all approved teams entries for a project
router.get('/approved-team/:projectId', GetAppovedTeam);

// Update approved Team entry
router.put('/approved-team/:id',UpdateApprovedTeam);

// Delete approved team entry
router.delete('/approved-team/:id',DeleteApprovedTeam);

module.exports = router;
