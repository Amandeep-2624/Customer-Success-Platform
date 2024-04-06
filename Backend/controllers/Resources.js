const Resources = require('../models/Resources');

exports.CreateProjectResource=async (req, res) => {
    const resources = new Resources({
        projectId:req.body.projectId,
        resourceName:req.body.resourceName,
        role:req.body.role,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        comment:req.body.comment,
        
    });
    try{
        const newresources=await resources.save()
        res.status(201).json(newresources);
    }
    catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetProjectResources=async (req, res) => {
    try {
      const resources = await Resources.find({ projectId: req.params.projectId });
      res.json(resources);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateProjectResource=async (req, res) => {
    try {
      const updatedResource = await Resources.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedResource);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteProjectResource= async (req, res) => {
    try {
      await Resources.findByIdAndDelete(req.params.id);
      res.json({ message: 'Project Resource entry deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}