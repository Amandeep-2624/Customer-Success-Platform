const ApprovedTeam = require('../models/ApprovedTeam');

exports.CreateApprovedTeam=async (req, res) => {
    const approvedTeam = new ApprovedTeam({
        projectId:req.body.projectId,
        phase:req.body.phase,
        numberOfResources:req.body.numberOfResources,
        role:req.body.role,
        availabilityPercentage:req.body.availabilityPercentage,
        duration:req.body.duration,
    });
    try{
        const newApprovedTeam=await approvedTeam.save()
        res.status(201).json(newApprovedTeam);
    }
    catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetAppovedTeam=async (req, res) => {
    try {
      const approvedTeam = await ApprovedTeam.find({ projectId: req.params.projectId });
      res.json(approvedTeam);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateApprovedTeam=async (req, res) => {
    try {
      const updatedApprovedTeam = await ApprovedTeam.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedApprovedTeam);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteApprovedTeam= async (req, res) => {
    try {
      await ApprovedTeam.findByIdAndDelete(req.params.id);
      res.json({ message: 'Approved Team entry deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}