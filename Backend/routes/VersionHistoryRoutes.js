const express = require('express');
const router = express.Router();
const {CreateVersionHistory,GetVersionHistory,UpdateVersionHistory,DeleteVersionHistory}=require("../controllers/VersionHistory");

// Create version history entry
router.post('/version-history',CreateVersionHistory );

// Read all version history entries for a project
router.get('/version-history/:projectId',GetVersionHistory );

// Update version history entry
router.put('/version-history/:id',UpdateVersionHistory );

// Delete version history entry
router.delete('/version-history/:id',DeleteVersionHistory );

module.exports = router;
