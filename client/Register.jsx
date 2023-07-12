import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    // Perform validation here, e.g., check if all required fields are filled

    // Prepare the user data
    const userData = {
      name,
      username,
      email,
      phone,
    };

    try {
      // insert into users_passwords table first
      const psw_table = await fetch("http://localhost:3000/users_passwords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const users_table = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (psw_table.ok && users_table.ok) {
        console.log("User signed up successfully!");
        // insert ourUser into localStorage
        const ourUser = await fetch(
          `http://localhost:3000/users/${username}`
        ).then((response) => response.json());
        localStorage.setItem("ourUser", JSON.stringify(ourUser));
        // redirect to /logged
        // window.location.href = "/logged";
        window.location.href = `/users/${username}`;
        // Redirect to the login page or perform any other action
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="background1">
      <form>
        <h2>Create an account:</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default Register;
