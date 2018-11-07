const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    uppercase: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: 0,
  },
  name: {
    type: String,
  }
});

module.exports = mongoose.model('User', userSchema);
