import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Logged from "./Logged";
import Posts from "./Posts";
import Register from "./Register";

function HomePage() {
  //when logging in/out
  localStorage.removeItem("ourUser");
  localStorage.removeItem("todos");

  return (
    <div>
      <h1>hello, welcome to our app</h1>
      <button>
        <Link to="/login">Log in</Link>
      </button>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}

export default HomePage;
