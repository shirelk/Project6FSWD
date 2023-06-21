import React, { useState } from "react";
// const myApi = require("./api.cjs");

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const response = await fetch(`http://localhost:3000/users/${username}`);

    const user = await response.json();
    // const user = users.find((user) => user.username === username);

    if (!user) {
      setError("Username does not exist.");
      return;
    }
    // password is the last 4 digits of "lat"
    const userPassword = user.lat.slice(-4);

    if (user.username === username && userPassword === password) {
      console.log("successful login");
      localStorage.removeItem("ourUser");
      localStorage.setItem("ourUser", JSON.stringify(user));
      document.location.href = "/logged";
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="background1">
      <form>
        <h2>Please enter your name:</h2>
        {/* <h4>username: Bret</h4> */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <h2>Please enter your password:</h2>
        {/* <h4>password: 3159</h4> */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="button" onClick={handleLogin}>
          Log in
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
export default Login;
