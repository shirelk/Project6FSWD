import React, { Component } from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Albums from "./Albums";
import Posts from "./Posts";
import Info from "./Info";
import Todos from "./Todos";
function Logged() {
  let user = JSON.parse(localStorage.getItem("ourUser"));
  let username = user.username;
  return (
    <div>
      <h1>welcome, {user.name}!</h1>
      <button className="mainBtn">
        <Link to="/">log out</Link>
      </button>
      <button className="mainBtn">
        <Link to="/logged/albums">albums</Link>
      </button>
      <button className="mainBtn">
        <Link to="/logged/posts">posts</Link>
      </button>
      <button className="mainBtn">
        <Link to="/logged/todos">todos</Link>
      </button>
      <button className="mainBtn">
        <Link to="/logged/info">info</Link>
      </button>
      <Routes>
        <Route path="/albums" element={<Albums />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default Logged;
