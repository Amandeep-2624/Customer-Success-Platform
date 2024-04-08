// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const  {CreateUser,GetUsers,GetUserById}=require("../controllers/User");

router.use(bodyParser.json());

// Create a new user
router.post('/users',CreateUser);

// Fetch user by role
router.get('/users/:role',GetUsers);

// Fetch user by ID
router.get('/user/:id', GetUserById);



module.exports = router;
