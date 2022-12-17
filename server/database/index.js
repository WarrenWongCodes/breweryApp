const mongoose = require('mongoose');
// require('dotenv').config();
// Deployment: add as ENV VAR
const url = 'mongodb://localhost:27017/breweries';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => console.log('MongoDB connected!'));

module.exports = db;