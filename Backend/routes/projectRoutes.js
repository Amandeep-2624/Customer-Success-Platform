const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const {GetProjects,CreateProject,GetProjectById,UpdateProject,DeleteProject}=require("../controllers/Project");

//get all project details
router.get('/projects',GetProjects);

//create new projects
router.post('/projects',CreateProject);

//get project by id
router.get('/projects/:id',GetProjectById);
  
//update a project by id
router.put('/projects/:id',UpdateProject);
  

//delete a project by id
router.delete('/projects/:id',DeleteProject);

module.exports=router;