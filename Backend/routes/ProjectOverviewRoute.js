const express = require('express');
const router = express.Router();

const{CreateProjectOverview,GetProjectOverview,UpdateProjectOverview,DeleteProjectOverview}=require("../controllers/ProjectOverview");

// Create project Overview
router.post('/overview',CreateProjectOverview);

// Read all project scope&stack
router.get('/overview/:projectId',GetProjectOverview );


// Update project scope entry
router.put('/overview/:id', UpdateProjectOverview);

// Delete project budget Scope
router.delete('/overview/:id',DeleteProjectOverview);

module.exports = router;
