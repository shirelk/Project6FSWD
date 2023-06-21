import React, { useState } from "react";
function Info() {
  function getInfo(){
    let user = JSON.parse(localStorage.getItem("ourUser"));
    return <>
      <h2>{user.name}</h2>
      <p>
      username: {user.username} <br/>
      email: {user.email}<br/>
      address: <br/>
        street: {user.address.street}<br/>
        suite: {user.address.suite}<br/>
        city: {user.address.city}<br/>
        zipcode: {user.address.zipcode}<br/>
        geo: <br/>
          lat: {user.address.geo.lat}<br/>
          lng: {user.address.geo.lng}<br/>
          
      phone: {user.phone}<br/>
      website: {user.phone}<br/>
      company: <br/>
        name: {user.company.name}<br/>
        catchPhrase: {user.company.catchPhrase}<br/>
        bs: {user.company.bs}
      </p>
    </>
  }
  return (
    <>
      {getInfo()}
    </>
  );
}

export default Info;
