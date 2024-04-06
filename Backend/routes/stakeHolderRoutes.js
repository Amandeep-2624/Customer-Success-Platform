const express = require('express');
const router = express.Router();

const {CreateStakeHolder,GetStakeHolders,UpdateStakeHolder,DeleteStakeHolder}=require("../controllers/StakeHolder")

// Create stakeholder entry
router.post('/stakeholders',CreateStakeHolder);

// Read all stakeholders for a project
router.get('/stakeholders/:projectId',GetStakeHolders );

// Update stakeholder entry
router.put('/stakeholders/:id',UpdateStakeHolder );

// Delete stakeholder entry
router.delete('/stakeholders/:id',DeleteStakeHolder );

module.exports = router;
