const ProjectUpdate = require('../models/ProjectUpdates');

exports.CreateProjectUpdates= async (req, res) => {
    const update=new ProjectUpdate({
          projectId: req.body.projectId,
          date: req.body.date,
          generalUpdates: req.body.generalUpdates,
    })
  try {
    const newUpdate=await update.save()
    res.status(201).json(newUpdate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetProjectUpdates= async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const update = await ProjectUpdate.find({ projectId });
      res.json(update);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.UpdateProjectUpdate=async (req, res) => {
    try {
      const updatedProjectUpdate = await ProjectUpdate.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProjectUpdate);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteProjectUpdates=async (req, res) => {
    try {
      await ProjectUpdate.findByIdAndDelete(req.params.id);
      res.json({ message: 'Phase deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}