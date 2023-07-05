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
  //const userID = user.id;
  const userURL = `/users/${username}`;

  return (
    <div>
      <h1>welcome, {user.name}!</h1>
      <button className="mainBtn">
        <Link to={`/`}>log out</Link>
      </button>
      <button className="mainBtn">
        <Link to={`${userURL}/albums`}>Albums</Link>
      </button>
      <button className="mainBtn">
        <Link to={`${userURL}/posts`}>Posts</Link>
      </button>
      <button className="mainBtn">
        <Link to={`${userURL}/todos`}>Todos</Link>
      </button>
      <button className="mainBtn">
        <Link to={`${userURL}/info`}>Info</Link>
      </button>
      <Routes>
        <Route path={`/albums`} element={<Albums />} />
        <Route path={`/posts`} element={<Posts />} />
        <Route path={`/todos`} element={<Todos />} />
        <Route path={`/info`} element={<Info />} />
        {/* <Route path={`/users/:username`} element={<UserProfile />} /> */}
      </Routes>
    </div>
  );
}

export default Logged;
