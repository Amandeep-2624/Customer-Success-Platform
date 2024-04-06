const express = require('express');
const router = express.Router();
const {CreateAudit,GetAudit,UpdateAudit,DeleteAudit} =require("../controllers/AuditHistory");

// Create audit history entry
router.post('/audit-history',CreateAudit);

// Read all audit history entries for a project
router.get('/audit-history/:projectId', GetAudit);

// Update audit history entry
router.put('/audit-history/:id', UpdateAudit);

// Delete audit history entry
router.delete('/audit-history/:id', DeleteAudit);

module.exports = router;
