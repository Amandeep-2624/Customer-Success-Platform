const express = require('express');
const router = express.Router();
const {CreateProjectUpdates,GetProjectUpdates,UpdateProjectUpdate,DeleteProjectUpdates}=require("../controllers/ProjectUpdates");
// Create project update entry
router.post('/project-update',CreateProjectUpdates);

// Read all  project-update for a specific project
router.get('/project-update/:projectId',GetProjectUpdates);


// Update project-update entry
router.put('/project-update/:id',UpdateProjectUpdate);

// Delete  project-update entry
router.delete('/project-update/:id', DeleteProjectUpdates);

module.exports = router;
