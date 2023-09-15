require('dotenv').config();
const mongoose = require('mongoose');
const databaseURL=process.env.DATABASE_URL;
mongoose.connect(databaseURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
})