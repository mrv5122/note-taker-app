var path = require('path');

module.exports = (app) => {
// All other routes respond with the index.html file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// "/notes" responds with the notes.html file
app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});
};
