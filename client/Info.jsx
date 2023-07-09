import React, { useState } from "react";
function Info() {
  function getInfo() {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    return (
      <div className="infoContainer">
        <div className="infoDiv">
          <h2>{user.name}</h2>
          <p>
            username: {user.username} <br />
            email: {user.email}
            <br />
            address: <br />
            street: {user.street}
            <br />
            suite: {user.suite}
            <br />
            city: {user.city}
            <br />
            zipcode: {user.zipcode}
            <br />
            geo: <br />
            lat: {user.lat}
            <br />
            lng: {user.lng}
            <br />
            phone: {user.phone}
            <br />
            website: {user.phone}
            <br />
            company: <br />
            name: {user.companyName}
            <br />
            catchPhrase: {user.catchPhrase}
            <br />
            bs: {user.bs}
          </p>
        </div>
        <div className="crudDiv">
          <button className="crudBtn mainBtn">change password</button>
          <button className="crudBtn mainBtn">edit info</button>
          <button className="crudBtn mainBtn">delete user</button>
        </div>
      </div>
    );
  }
  return <>{getInfo()}</>;
}

export default Info;
