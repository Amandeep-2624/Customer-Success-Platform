const VersionHistory = require('../models/VersionHistory');

exports.CreateVersionHistory=async (req, res) => {
    const versionHistory = new VersionHistory({
        version:req.body.version,
        projectId:req.body.projectId,
        Type:req.body.Type,
        change:req.body.change,
        changeReason:req.body.changeReason,
        createdBy:req.body.createdBy,
        revisionDate:req.body.revisionDate,
        approvalDate:req.body.approvalDate,
        approvedBy:req.body.approvedBy
    });
  try {
    const newversionHistory=await versionHistory.save()
    res.status(201).json(newversionHistory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetVersionHistory=async (req, res) => {
    try {
      const versionHistory = await VersionHistory.find({ projectId: req.params.projectId });
      res.json(versionHistory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.UpdateVersionHistory=async (req, res) => {
    try {
      const updatedVersionHistory = await VersionHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedVersionHistory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteVersionHistory=async (req, res) => {
    try {
      await VersionHistory.findByIdAndDelete(req.params.id);
      res.json({ message: 'Version history entry deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}