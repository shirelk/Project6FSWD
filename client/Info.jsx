import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "./Popup";
function Info() {
  const [buttonChangePassword, setButtonChangePassword] = useState(false);
  const [buttonEditInfo, setButtonEditInfo] = useState(false);
  const [buttonDeleteUser, setButtonDeleteUser] = useState(false);

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
          <button
            className="crudBtn mainBtn"
            onClick={() => setButtonChangePassword(true)}
          >
            change password
          </button>
          <Popup trigger={buttonChangePassword} setTrigger={setButtonChangePassword}>
            {console.log("change password popup")}
            <h3>change password</h3>
            <h5>enter new password:</h5>
            <input type="text" placeholder="new password"></input>
          </Popup>
          <button className="crudBtn mainBtn">edit info</button>
          <button className="crudBtn mainBtn">delete user</button>
        </div>
      </div>
    );
  }
  return <>{getInfo()}</>;
}

export default Info;
