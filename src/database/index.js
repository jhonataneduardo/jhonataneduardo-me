let mongoose = require('mongoose')
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Mongodb OK!')
});

mongoose.connect('mongodb://localhost/jhodb', { useNewUrlParser: true, useUnifiedTopology: true });
 
mongoose.Promise = global.Promise;

module.exports = mongoose;