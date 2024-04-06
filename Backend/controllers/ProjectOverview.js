const ProjectOverview = require('../models/ProjectOverview');

exports.CreateProjectOverview= async (req, res) => {
    const projectOverview=new ProjectOverview({
        projectId:req.body.projectId,
        brief:req.body.brief,
        Purpose:req.body.Purpose,
        Goals:req.body.Goals,
        Objectives:req.body.Objectives,
        Budget:req.body.Budget,
        
    })
  try {
    const newProjectOverview=await projectOverview.save()
    res.status(201).json(newProjectOverview);
  } 
  catch (err) {
    res.status(400).json({ message: err.message });
  }
}


exports.GetProjectOverview=async (req, res) => {
    try {
      const projectOverview = await ProjectOverview.find({ projectId: req.params.projectId});
      res.json(projectOverview);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateProjectOverview=async (req, res) => {
    try {
      const updatedProjectOverview = await ProjectOverview.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProjectScope);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteProjectOverview= async (req, res) => {
  try {
    await ScopeandStack.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project scope deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}






