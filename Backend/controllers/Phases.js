const Phases = require('../models/Phases');

exports.CreatePhase=async (req, res) => {
    const phase=new Phases({
        projectId: req.body.projectId,
          Title: req.body.Title,
          startDate: req.body.startDate,
          completionDate: req.body.completionDate,
          approvalDate: req.body.approvalDate,
          RevisedDate: req.body.RevisedDate,
          Comments: req.body.Comments
    })
  try {
    const phase = new Phases(req.body);
    await phase.save();
    res.status(201).json(phase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetPhases=async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const phases = await Phases.find({ projectId });
      res.json(phases);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.GetPhase=async (req, res) => {
    try {
      const phase = await Phases.findById(req.params.id);
      if (!phase) {
        return res.status(404).json({ message: 'Phase not found' });
      }
      res.json(phase);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdatePhase=async (req, res) => {
    try {
      const updatedPhase = await Phases.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedPhase);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeletePhase= async (req, res) => {
    try {
      await Phases.findByIdAndDelete(req.params.id);
      res.json({ message: 'Phase deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}
