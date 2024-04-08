const EscalationMatrix = require('../models/EscalationMatrix');

exports.CreateEscalation =async (req, res) => {
    const escaltionMatrix = new EscalationMatrix({
        projectId:req.body.projectId,
        escalationType:req.body.escalationType,
        escaltionLevel:req.body.escaltionLevel,
        role:req.body.role,
    });
    try{
        const newEscalation=await escaltionMatrix.save()
        res.status(201).json(newEscalation);
    }
    catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetEscalation=async (req, res) => {
    try {
      const escaltionMatrix = await EscalationMatrix.find({ projectId: req.params.projectId });
      res.json(escaltionMatrix);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.UpdateEscaltion = async (req, res) => {
    try {
      const updatedEscaltion = await EscalationMatrix.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedEscaltion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteEscalation= async (req, res) => {
    try {
      await EscalationMatrix.findByIdAndDelete(req.params.id);
      res.json({ message: 'Audit history entry deleted' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

