const ScopeandStack = require('../models/ScopeandStack');


exports.CreateScopeandStack= async (req, res) => {
    const projectScope=new ScopeandStack({
        projectId:req.body.projectId,
        projectStack:req.body.projectStack,
        projectScope:req.body.projectScope,
    })
  try {
    const newProjectScope=await projectScope.save()
    res.status(201).json(newProjectScope);
  } 
  catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetScopeandStacks=async (req, res) => {
    try {
      const projectScopes = await ScopeandStack.find({ projectId: req.params.projectId});
      res.json(projectScopes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.GetScopeandStackById=async (req, res) => {
    try {
      const projectScope = await ScopeandStack.findById(req.params.id);
      if (!projectScope) {
        return res.status(404).json({ message: 'Project scope not found' });
      }
      res.json(projectBudget);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateScopeandStcak=async (req, res) => {
    try {
      const updatedProjectScope = await ScopeandStack.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProjectScope);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteScopeandStack=async (req, res) => {
    try {
      await ScopeandStack.findByIdAndDelete(req.params.id);
      res.json({ message: 'Project scope deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

