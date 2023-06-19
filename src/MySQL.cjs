var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rkohen770",
  database: "jsonplaceholder",
  port: "3306",
});

con.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to MySQL server!");
  con.query("select * from users", function (err, result, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log(result);
  });
  con.end();
});
