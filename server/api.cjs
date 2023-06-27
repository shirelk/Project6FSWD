const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./MySQL.cjs");

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//------------------------------------USERS-------------------------------------
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch users" });
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
        console.error("Error executing the query: ", err);
        return res.status(500).json({ error: "Failed to fetch user" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(results);
      res.json(results[0]);
    }
  );
});

// POST /users - Create a new user
app.post("/users", (req, res) => {
  const { name, username, email, phone } = req.body;
  db.query(
    "INSERT INTO users (name, username, email, phone) VALUES (?, ?, ?, ?)",
    [name, username, email, phone],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create user" });
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
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update user" });
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
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to delete user" });
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

app.get("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  db.query("SELECT * FROM todos WHERE userId = ?", [todoId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch todo" });
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
app.post("/todos", (req, res) => {
  const { title, completed, userId } = req.body;
  db.query(
    "INSERT INTO todos (title, completed, userId) VALUES (?, ?, ?)",
    [title, completed, userId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create todo" });
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
app.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const { title, completed, userId } = req.body;
  db.query(
    "UPDATE todos SET title = ?, completed = ?, userId = ? WHERE id = ?",
    [title, completed, userId, todoId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update todo" });
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
app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  db.query("DELETE FROM todos WHERE id = ?", [todoId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to delete todo" });
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
app.get("/posts", (req, res) => {
  console.log("we are here");
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch posts" });
      return;
    }
    res.json(results);
  });
});

app.get("/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.query("SELECT * FROM posts WHERE userId = ?", [postId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch post" });
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
app.post("/posts", (req, res) => {
  const { title, body, userId } = req.body;
  db.query(
    "INSERT INTO posts (title, body, userId) VALUES (?, ?, ?)",
    [title, body, userId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create post" });
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
app.put("/posts/:id", (req, res) => {
  const postId = req.params.id;
  const { title, body, userId } = req.body;
  db.query(
    "UPDATE posts SET title = ?, body = ?, userId = ? WHERE id = ?",
    [title, body, userId, postId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update post" });
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
app.delete("/posts/:id", (req, res) => {
  const postId = req.params.id;
  db.query("DELETE FROM posts WHERE id = ?", [postId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to delete post" });
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

app.get("/comments/:pstId", (req, res) => {
  const commentId = req.params.pstId;
  db.query(
    "SELECT * FROM comments WHERE postId = ?",
    [commentId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to fetch comment" });
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
app.post("/comments", (req, res) => {
  const { postId, name, email, body } = req.body;
  db.query(
    "INSERT INTO comments (postId, name, email, body) VALUES (?, ?, ?, ?)",
    [postId, name, email, body],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create comment" });
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
app.put("/comments/:id", (req, res) => {
  const commentId = req.params.id;
  const { postId, name, email, body } = req.body;
  db.query(
    "UPDATE comments SET postId = ?, name = ?, email = ?, body = ? WHERE id = ?",
    [postId, name, email, body, commentId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update comment" });
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
app.delete("/comments/:id", (req, res) => {
  const commentId = req.params.id;
  db.query("DELETE FROM comments WHERE id = ?", [commentId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to delete comment" });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Comment not found" });
      return;
    }
    res.json({ message: "Comment deleted successfully" });
  });
});

//-----------------------------ALBUMS-----------------------------------
app.get("/albums", (req, res) => {
  db.query("SELECT * FROM albums", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch albums" });
      return;
    }
    res.json(results);
  });
});

app.get("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  db.query(
    "SELECT * FROM albums WHERE userId = ?",
    [albumId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to fetch album" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Album not found" });
        return;
      }
      res.json(results);
    }
  );
});

// POST /albums - Create a new album
app.post("/albums", (req, res) => {
  const { title, userId } = req.body;
  db.query(
    "INSERT INTO albums (title, userId) VALUES (?, ?)",
    [title, userId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create album" });
        return;
      }
      res.json({
        message: "Album created successfully",
        albumId: results.insertId,
      });
    }
  );
});

// PUT /albums/:id - Update an existing album
app.put("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  const { title, userId } = req.body;
  db.query(
    "UPDATE albums SET title = ?, userId = ? WHERE id = ?",
    [title, userId, albumId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update album" });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Album not found" });
        return;
      }
      res.json({ message: "Album updated successfully" });
    }
  );
});

// DELETE /albums/:id - Delete a album
app.delete("/albums/:id", (req, res) => {
  const albumId = req.params.id;
  db.query("DELETE FROM albums WHERE id = ?", [albumId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to delete album" });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Album not found" });
      return;
    }
    res.json({ message: "Album deleted successfully" });
  });
});

//-----------------------------PHOTOS-----------------------------------
app.get("/photos", (req, res) => {
  db.query("SELECT * FROM photos", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch photos" });
      return;
    }
    res.json(results);
  });
});

app.get("/photos/:id", (req, res) => {
  const photoId = req.params.id;
  db.query(
    "SELECT * FROM photos WHERE albumId = ?",
    [photoId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to fetch photo" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Photo not found" });
        return;
      }
      res.json(results);
    }
  );
});

// POST /photos - Create a new photo
app.post("/photos", (req, res) => {
  const { title, url, thumbnailUrl, albumId } = req.body;
  db.query(
    "INSERT INTO photos (title, url, thumbnailUrl, albumId) VALUES (?, ?, ?, ?)",
    [title, url, thumbnailUrl, albumId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create photo" });
        return;
      }
      res.json({
        message: "Photo created successfully",
        photoId: results.insertId,
      });
    }
  );
});

// PUT /photos/:id - Update an existing photo
app.put("/photos/:id", (req, res) => {
  const photoId = req.params.id;
  const { title, url, thumbnailUrl, albumId } = req.body;
  db.query(
    "UPDATE photos SET title = ?, url = ?, thumbnailUrl = ?, albumId = ? WHERE id = ?",
    [title, url, thumbnailUrl, albumId, photoId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update photo" });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "Photo not found" });
        return;
      }
      res.json({ message: "Photo updated successfully" });
    }
  );
});

// DELETE /photos/:id - Delete a photo
app.delete("/photos/:id", (req, res) => {
  const photoId = req.params.id;
  db.query("DELETE FROM photos WHERE id = ?", [photoId], (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to delete photo" });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Photo not found" });
      return;
    }
    res.json({ message: "Photo deleted successfully" });
  });
});

//-----------------------------USERS_PASSWORDS-----------------------------------
app.get("/users_passwords", (req, res) => {
  db.query("SELECT * FROM users_passwords", (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).json({ error: "Failed to fetch users_passwords" });
      return;
    }
    res.json(results);
  });
});

app.get("/users_passwords/:username", (req, res) => {
  const username = req.params.username;
  db.query(
    "SELECT * FROM users_passwords WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        return res.status(500).json({ error: "Failed to fetch user" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      console.log(results);
      res.json(results[0]);
    }
  );
});

// POST /users_passwords - Create a new user
app.post("/users_passwords", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "INSERT INTO users_passwords (username, password) VALUES (?, ? )",
    [username, password],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to create user" });
        return;
      }
      res.json({
        message: "User created successfully",
        userId: results.insertId,
      });
    }
  );
});

// PUT /users_passwords/:id - Update an existing user
app.put("/users_passwords/:id", (req, res) => {
  const userId = req.params.id;
  const { username, password } = req.body;
  db.query(
    "UPDATE users_passwords SET username = ?, password = ? WHERE id = ?",
    [username, password, userId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to update user" });
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

// DELETE /users_passwords/:id - Delete a user
app.delete("/users_passwords/:id", (req, res) => {
  const userId = req.params.id;
  db.query(
    "DELETE FROM users_passwords WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("Error executing the query: ", err);
        res.status(500).json({ error: "Failed to delete user" });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ error: "User not found" });
        return;
      }
      res.json({ message: "User deleted successfully" });
    }
  );
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
