const express = require("express");
const app = express();
const db = require("./MySQL.cjs"); // Import the database connection module

// Define your API endpoints
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch users" });
      return;
    }
    res.json(results);
  });
});

app.get("/todos", (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch todos" });
      return;
    }
    res.json(results);
  });
});

app.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch posts" });
      return;
    }
    res.json(results);
  });
});

app.get("/comments", (req, res) => {
  db.query("SELECT * FROM comments", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch comments" });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
