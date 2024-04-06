const MoM = require('../models/Mom');

exports.CreateMom=async (req, res) => {
    const mom = new MoM({
        projectId:req.body.projectId,
        date:req.body.date,
        duration:req.body.duration,
        momLink:req.body.momLink,
        comments:req.body.comments
    });
  try {
    const newMoM=await mom.save()
    res.status(201).json(newMoM);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetMoM=async (req, res) => {
    try {
      const mom = await MoM.find({ projectId: req.params.projectId });
      res.json(mom);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.DeleteMoM=async (req, res) => {
    try {
      await MoM.findByIdAndDelete(req.params.id);
      res.json({ message: 'MoM entry deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}