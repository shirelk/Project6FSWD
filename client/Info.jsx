import React, { useState } from "react";
function Info() {
  function getInfo() {
    let user = JSON.parse(localStorage.getItem("ourUser"));
    return (
      <>
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
      </>
    );
  }
  return <>{getInfo()}</>;
}

export default Info;
