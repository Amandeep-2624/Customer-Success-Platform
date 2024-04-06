const express = require('express');
const router = express.Router();

const{CreateProjectResource,GetProjectResources,UpdateProjectResource,DeleteProjectResource}=require("../controllers/Resources");

// Create project resource entry
router.post('/resources',CreateProjectResource );

// Read all project resources entries for a project
router.get('/resources/:projectId',GetProjectResources );

// Update Project Resource entry
router.put('/resources/:id',UpdateProjectResource);

// Delete Project Resource entry
router.delete('/resources/:id',DeleteProjectResource);

module.exports = router;
