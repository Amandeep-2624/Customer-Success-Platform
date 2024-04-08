const SprintDetails = require('../models/sprintdetails');

exports.CreateSprint=async (req, res) => {
    const sprintDetails=new SprintDetails({
          projectId:req.body.projectId,
          sprint: req.body.sprint,
          startDate: req.body.startDate,
          EndDate: req.body.EndDate,
          Status:req.body.Status,
          Comments:req.body.Comments
    })
  try {
    const newSprint= await sprintDetails.save();
    res.status(201).json(newSprint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetSprintDetails=async (req, res) => {
    try {
      const sprints = await SprintDetails.find({ projectId: req.params.projectId });
      res.json(sprints);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.GetSprintById=async (req, res) => {
    try {
      const sprint = await SprintDetails.findOne({ _id: req.params.id, projectId: req.params.projectId });
      if (!sprint) {
        return res.status(404).json({ message: 'Sprint not found' });
      }
      res.json(sprint);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.UpdateSprintDetail=async (req, res) => {
    try {
      const updatedSprint = await SprintDetails.findOneAndUpdate(
        { _id: req.params.id, projectId: req.params.projectId },
        req.body,
        { new: true }
      );
      res.json(updatedSprint);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteSprintDetail=async (req, res) => {
    try {
      await SprintDetails.findByIdAndDelete(req.params.id);
      res.json({ message: 'sprint entry deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}