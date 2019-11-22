var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 4000,
    user: "root", // FIXME: Establish a connection to your MySQL Database
    password: "Omicronf15", // https://www.npmjs.com/package/mysql#establishing-connections
    database: "note_db"
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

connection.connect(function(err) {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  } else {
  console.log("connected as id: " + connection.threadID);
  };
});

module.exports = connection;
