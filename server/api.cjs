const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./MySQL.cjs");

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

function handleDatabaseError(res, error, errorMessage) {
  console.error("Error executing the query: ", error);
  res.status(500).json({ error: errorMessage });
}

//------------------------------------USERS-------------------------------------
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    console.log(results);
    res.json(results);
  });
});

app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(results);
      res.json(results[0]);
    }
  );
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(results);
    res.json(results[0]);
  });
});

// POST /users - Create a new user
app.post("/users", (req, res) => {
  const { name, username, lat, phone, email } = req.body;
  db.query(
    "INSERT INTO users (name, username, lat, phone, email) VALUES (?, ?, ?, ?, ?)",
    [name, username, lat, phone, email],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      res.json({
        message: "User created successfully",
        userId: results.insertId,
      });
    }
  );
});

// PUT /users/:id - Update an existing user
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  db.query(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, userId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.json({ message: "User updated successfully" });
    }
  );
});

// DELETE /users/:id - Delete a user
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json({ message: "User deleted successfully" });
  });
});

//---------------------------------TODOS-------------------------------------
app.get("/users/:userId/todos", (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    res.json(results);
  });
});

app.get("/users/:userId/todos/:id", (req, res) => {
  const todoId = req.params.id;
  db.query("SELECT * FROM todos WHERE id = ?", [todoId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }
    res.json(results);
  });
});

// POST /todos - Create a new todo
app.post("/users/:userId/todos", (req, res) => {
  const { title, completed, userId } = req.body;
  db.query(
    "INSERT INTO todos (title, completed, userId) VALUES (?, ?, ?)",
    [title, completed, userId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      res.json({
        message: "Todo created successfully",
        todoId: results.insertId,
      });
    }
  );
});

// PUT /todos/:id - Update an existing todo
app.put("/users/:userId/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const { title, completed, userId } = req.body;
  db.query(
    "UPDATE todos SET title = ?, completed = ?, userId = ? WHERE id = ?",
    [title, completed, userId, todoId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Todo not found" });
        return;
      }
      res.json({ message: "Todo updated successfully" });
    }
  );
});

// DELETE /todos/:id - Delete a todo
app.delete("/users/:userId/todos/:id", (req, res) => {
  const todoId = req.params.id;
  db.query("DELETE FROM todos WHERE id = ?", [todoId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }
    res.json({ message: "Todo deleted successfully" });
  });
});

//------------------------------POSTS-------------------------------------------
app.get("/users/:userId/posts", (req, res) => {
  const userId = req.params.userId;
  console.log("we are here");
  db.query("SELECT * FROM posts WHERE userId = ?", [userId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    res.json(results);
  });
});

app.get("/users/:userId/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.query("SELECT * FROM posts WHERE postId = ?", [postId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.json(results);
  });
});

// POST /posts - Create a new post
app.post("/users/:userId/posts", (req, res) => {
  const { title, body, userId } = req.body;
  db.query(
    "INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)",
    [title, body, userId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      res.json({
        message: "Post created successfully",
        postId: results.insertId,
      });
    }
  );
});

// PUT /posts/:id - Update an existing post
app.put("/users/:userId/posts/:id", (req, res) => {
  const postId = req.params.id;
  const { title, body, userId } = req.body;
  db.query(
    "UPDATE posts SET title = ?, body = ?, userId = ? WHERE id = ?",
    [title, body, userId, postId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Post not found" });
        return;
      }
      res.json({ message: "Post updated successfully" });
    }
  );
});

// DELETE /posts/:id - Delete a post
app.delete("/users/:userId/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.query("DELETE FROM posts WHERE id = ?", [postId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Post not found" });
      return;
    }
    res.json({ message: "Post deleted successfully" });
  });
});

//----------------------COMMENTS------------------------------------
app.get("/users/:userId/comments", (req, res) => {
  const userId = req.params.userId;
  db.query(
    "SELECT * FROM comments WHERE userId = ?",
    [userId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      res.json(results);
    }
  );
});

app.get("/users/:userId/comments/:pstId", (req, res) => {
  const commentId = req.params.pstId;
  db.query(
    "SELECT * FROM comments WHERE postId = ?",
    [commentId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Comment not found" });
        return;
      }
      res.json(results);
    }
  );
});

// POST /comments - Create a new comment
app.post("/users/:userId/comments", (req, res) => {
  const { postId, name, email, body } = req.body;
  db.query(
    "INSERT INTO comments (postId, name, email, body) VALUES (?, ?, ?, ?)",
    [postId, name, email, body],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      res.json({
        message: "Comment created successfully",
        commentId: results.insertId,
      });
    }
  );
});

// PUT /comments/:id - Update an existing comment
app.put("/users/:userId/comments/:id", (req, res) => {
  const commentId = req.params.id;
  const { postId, name, email, body } = req.body;
  db.query(
    "UPDATE comments SET postId = ?, name = ?, email = ?, body = ? WHERE id = ?",
    [postId, name, email, body, commentId],
    (err, results) => {
      if (err) {
        handleDatabaseError(res, err, "Failed to fetch users");
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Comment not found" });
        return;
      }
      res.json({ message: "Comment updated successfully" });
    }
  );
});

// DELETE /comments/:id - Delete a comment
app.delete("/users/:userId/comments/:id", (req, res) => {
  const commentId = req.params.id;
  db.query("DELETE FROM comments WHERE id = ?", [commentId], (err, results) => {
    if (err) {
      handleDatabaseError(res, err, "Failed to fetch users");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }
    res.json({ message: "Comment deleted successfully" });
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
