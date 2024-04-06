const ClientFeedback = require('../models/ClientFeedback');

exports.CreateClientFeedback= async (req, res) => {
    const clientFeedback = new ClientFeedback({
        projectId:req.body.projectId,
        feedbackType:req.body.feedbackType,
        dateReceived:req.body.dateReceived,
        detailedFeedback:req.body.detailedFeedback,
        actionTaken:req.body.actionTaken,
        closureDate:req.body.closureDate,
    });
    try{
        const newClientFeedback=await clientFeedback.save()
        res.status(201).json(newClientFeedback);
    }
    catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetClientFeedback =async (req, res) => {
    try {
      const clientFeedback = await ClientFeedback.find({ projectId: req.params.projectId });
      res.json(clientFeedback);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.UpdateClientFeedback= async (req, res) => {
    try {
      const updatedClientFeedback = await ClientFeedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedClientFeedback);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.DeleteClientFeedback= async (req, res) => {
    try {
      await ClientFeedback.findByIdAndDelete(req.params.id);
      res.json({ message: 'client feedback entry deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}
