const mongoose = require('mongoose');

let server = "mongo_db";
mongoose.connect(`mongodb://${server}:27017/basefromdocker`)
mongoose.Promise = global.Promise

module.exports = mongoose;