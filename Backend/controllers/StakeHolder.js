const StakeHolders = require('../models/stakeHolders');

exports.CreateStakeHolder=async (req, res) => {
    const stakeholder = new StakeHolders({
        projectId:req.body.projectId,
        Title:req.body.Title,
        Name:req.body.Name,
        Contact:req.body.Contact
    });
  try {
    const newstakeHolder=await stakeholder.save();
    res.status(201).json(newstakeHolder);
  }
   catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetStakeHolders=async (req, res) => {
    try {
      const stakeholders = await StakeHolders.find({ projectId: req.params.projectId });
      res.json(stakeholders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateStakeHolder=async (req, res) => {
    try {
      const updatedStakeholder = await StakeHolders.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedStakeholder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteStakeHolder=async (req, res) => {
    try {
      await StakeHolders.findByIdAndDelete(req.params.id);
      res.json({ message: 'Stakeholder entry deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}