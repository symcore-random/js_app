const mongoose = require('../database/database');

const UserSchema = new mongoose.Schema({}, { strict: false });

const User = mongoose.model('User', UserSchema);


module.exports = User;