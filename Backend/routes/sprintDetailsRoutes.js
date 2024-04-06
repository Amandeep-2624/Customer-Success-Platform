const express = require('express');
const router = express.Router();
const  {CreateSprint,GetSprintDetails,GetSprintById,UpdateSprintDetail,DeleteSprintDetail}=require("../controllers/SprintDetails");
// Create sprint entry
router.post('/sprints',CreateSprint);

// Read all sprints for a specific project
router.get('/sprints/:projectId',GetSprintDetails);

// Read a specific sprint by ID
router.get('/sprints/:projectId/:id',GetSprintById);

// Update sprint entry
router.put('/sprints/:projectId/:id', UpdateSprintDetail);

// Delete sprint entry
router.delete('/sprints/:id',DeleteSprintDetail);

module.exports = router;
