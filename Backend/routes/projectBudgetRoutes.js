const express = require('express');
const router = express.Router();
const {CreateProjectBudget,GetProjectBudget,UpdateProjectBudget,DeleteProjectBudget}=require("../controllers/ProjectBudget");

// Create project budget entry
router.post('/project-budget',CreateProjectBudget);

// Read all project budgets
router.get('/project-budget/:projectId',GetProjectBudget);


// Update project budget entry
router.put('/project-budget/:id', UpdateProjectBudget);

// Delete project budget entry
router.delete('/project-budget/:id', DeleteProjectBudget);

module.exports = router;
