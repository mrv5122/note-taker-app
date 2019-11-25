
module.exports = (app, connection) => {
// retreive all notes
app.get('/api/notes', (req, res) => {
  connection.query('SELECT * FROM notes;', function(err, result) {
    if (err) {
      console.log(err);
    } else {
      // return to user as JSON
      res.json(result);
      console.log(result);
    }
  });
});

// POST uses data passed on req.body to create a new note in the database
app.post('/api/notes', function(req, res) {
  // TODO: Create connection query to insert a new note into MySQL database
  connection.query('INSERT INTO notes SET title= "' + req.body.title + '", body= "' + req.body.body + '";', function(err) {
    if (err) {
      throw err
    } else {
      console.log("Note added to database");
    }
    
  });
});

// DELETE note from database
app.delete('/api/notes/:id', function(req, res) {
  connection.query("DELETE FROM notes WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err
    } else {
    res.json(result);
    console.log("note deleted ", req.params.id);
    }
  });
});

// PUT to update notes
app.put("/api/notes/:id", function(req, res){
  connection.query("UPDATE notes SET title = ?, text = ? WHERE id = ?", [req.body.noteTitle, req.body.noteText,req.params.id], function(err) {
    if (err) {
       throw err
    } else {
      console.log("Note updated", req.params.id);
      console.log(res);
    }
  });
});

};
