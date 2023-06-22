var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rkohen770",
  database: "jsonplaceholder",
  port: "3306",
});

function query(myQuery, callback) {
  con.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Connected to MySQL server!");
    con.query(myQuery, callback);
    // con.end();
  });
}

function query(myQuery, faild, callback) {
  con.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Connected to MySQL server!");
    con.query(myQuery, faild, callback);
  });
}

module.exports = {
  query,
};
