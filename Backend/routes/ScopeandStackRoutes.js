const express = require('express');
const router = express.Router();
const {CreateScopeandStack,GetScopeandStacks,GetScopeandStackById,UpdateScopeandStcak}=require("../controllers/RiskProfile");
// Create project scope and stack
router.post('/project-scope',CreateScopeandStack);

// Read all project scope&stack
router.get('/project-scope/:projectId',GetScopeandStacks );

// Read a specific project scope by ID
router.get('/project-scope/:id',GetScopeandStackById);

// Update project scope entry
router.put('/project-scope/:id', UpdateScopeandStcak);

// Delete project budget Scope
router.delete('/project-scope/:id', DeleteScopeandStack);

module.exports = router;
