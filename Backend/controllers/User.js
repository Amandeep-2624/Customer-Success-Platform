const User = require('../models/user');

exports.CreateUser=async (req, res) => {
    const user=new User({
        username:req.body.username,
        email:req.body.email,
        role: req.body.role
    })
  try {
    console.log(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.GetUsers=async (req, res) => {
    try {
      const users = await User.find({ role: req.params.role });
      res.json(users);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

exports.GetUserById=async (req, res)=>{
    try {
      const user = await User.findById(req.params.id);
      if (user == null) {
        res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
}

