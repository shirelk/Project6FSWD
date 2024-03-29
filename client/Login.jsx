import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// const myApi = require("./api.cjs");

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // extract username and password from user_passwords table
    const user = await fetch(
      `http://localhost:3000/users_passwords/${username}`
    ).then((response) => response.json());
    if (user) {
      console.log(user);
      // check if password matches
      if (user.password === password) {
        // get user info from users table
        const ourUser = await fetch(
          `http://localhost:3000/users/${user.username}`
        ).then((response) => response.json());

        // store user info in localStorage
        localStorage.setItem("ourUser", JSON.stringify(ourUser));

        // redirect to /Logged
        // window.location.href = "/Logged";
        window.location.href = `/users/${username}`;
      } else {
        setError("Incorrect password");
      }
    }
    // password is the last 4 digits of "lat"
    const userPassword = user.lat.slice(-4);

    if (user.username === username && userPassword === password) {
      console.log("successful login");
      localStorage.removeItem("ourUser");
      localStorage.setItem("ourUser", JSON.stringify(user));
      //document.location.href = "/logged";
      document.location.href = `/users/${username}`;
    } else {
      setError("Incorrect password.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        <button type="button" onClick={handleLogin}>
          Log in
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
export default Login;
