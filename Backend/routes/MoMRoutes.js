const express = require('express');
const router = express.Router();
const {CreateMom,GetMoM,DeleteMoM}=require("../controllers/Mom");

// Create MoM entry
router.post('/mom', CreateMom);

// Read all MOM entries for a project
router.get('/mom/:projectId',GetMoM);

//Delete MoM entry
router.delete('/mom/:id',DeleteMoM );


module.exports = router;
