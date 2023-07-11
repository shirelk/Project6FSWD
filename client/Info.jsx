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
          <Popup
            trigger={buttonChangePassword}
            setTrigger={setButtonChangePassword}
          >
            <div className="popup-div">
              {console.log("change password popup")}
              <h3>change password</h3>
              <h5>enter new password:</h5>
              <input type="text" placeholder="new password"></input>
            </div>
          </Popup>
          <button
            className="crudBtn mainBtn"
            onClick={() => setButtonEditInfo(true)}
          >
            edit info
          </button>
          <Popup trigger={buttonEditInfo} setTrigger={setButtonEditInfo}>
            <div className="popup-div">
              {console.log("edit info popup")}
              <h3>Edit info</h3>
              {/* לעשות שיופיע בפלייסהולדר את הנתונים שיש עכשיו? */}
              <input type="text" placeholder="Username"></input>
              <input type="email" placeholder="Email"></input>
              <input type="text" placeholder="Address"></input>
              <input type="text" placeholder="Street"></input>
              <input type="text" placeholder="Suit"></input>
              <input type="text" placeholder="City"></input>
              <input type="text" placeholder="Zip code"></input>
              <input type="text" placeholder="Geo"></input>
              <input type="text" placeholder="Latitude"></input>
              <input type="text" placeholder="Longitude"></input>
              <input type="text" placeholder="Phone"></input>
              <input type="text" placeholder="Website"></input>
              <input type="text" placeholder="Company"></input>
              <input type="text" placeholder="Name"></input>
              <input type="text" placeholder="catchPhrase"></input>
              <input type="text" placeholder="bs"></input>
            </div>
          </Popup>
          <button
            className="crudBtn mainBtn"
            onClick={() => setButtonDeleteUser(true)}
          >
            delete user
          </button>
          <Popup trigger={buttonDeleteUser} setTrigger={setButtonDeleteUser}>
            <div className="popup-div">
              {console.log("delete user popup")}
              <h3>Are you sure you want to delete the user?</h3>
              <h5>enter your password to confirm:</h5>
              <input type="password" placeholder="password"></input>
              {/* להוסיף בדיקה לסיסמה */}
            </div>
          </Popup>
        </div>
      </div>
    );
  }
  return <>{getInfo()}</>;
}

export default Info;
