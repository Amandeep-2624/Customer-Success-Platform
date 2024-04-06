const express = require('express');
const router = express.Router();

const {CreateClientFeedback,GetClientFeedback,UpdateClientFeedback,DeleteClientFeedback}=require("../controllers/ClientFeedback")

// Create ClientFeedback entry
router.post('/client-feedback',CreateClientFeedback);

// Read all ClientFeedback entries for a project
router.get('/client-feedback/:projectId',GetClientFeedback );

// Update ClientFeedback entry
router.put('/client-feedback/:id',UpdateClientFeedback);

// Delete ClientFeedback entry
router.delete('/client-feedback/:id',DeleteClientFeedback);

module.exports = router;
