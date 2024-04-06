const ProjectBudget = require('../models/ProjectBudget');

exports.CreateProjectBudget=async (req, res) => {
    const projectBudget=new ProjectBudget({
        projectId:req.body.projectId,
        projectType:req.body.projectType,
        Duration:req.body.Duration,
        budgetHours:req.body.budgetHours
    })
  try {
    const newProjectBudget=await projectBudget.save()
    res.status(201).json(newProjectBudget);
  } 
  catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetProjectBudget=async (req, res) => {
    try {
      const projectBudgets = await ProjectBudget.find({ projectId: req.params.projectId});
      res.json(projectBudgets);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateProjectBudget=async (req, res) => {
    try {
      const updatedProjectBudget = await ProjectBudget.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProjectBudget);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteProjectBudget=async (req, res) => {
    try {
      await ProjectBudget.findByIdAndDelete(req.params.id);
      res.json({ message: 'Project budget deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

