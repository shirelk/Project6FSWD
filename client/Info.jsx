import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "./Popup";
function Info() {
  const [buttonChangePassword, setButtonChangePassword] = useState(false);
  const [buttonEditInfo, setButtonEditInfo] = useState(false);
  const [buttonDeleteUser, setButtonDeleteUser] = useState(false);
  let user = JSON.parse(localStorage.getItem("ourUser"));

  async function saveNewPass() {
    let newPass = document.getElementById("newPass");
    {/* save new password in database */}
    await fetch(`http://localhost:3000/users_passwords/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: newPass.value,
      }),
    });
  }

  function getInfo() {
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
            setSave={saveNewPass}
          >
            <div className="popup-div">
              {console.log("change password popup")}
              <h3>change password</h3>
              <h5>enter new password:</h5>
              <input
                id="newPass"
                type="text"
                placeholder="new password"
              ></input>
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
              {console.log(user.username)}
              <input
                type="text"
                placeholder={user.username ? user.username : "username"}
              ></input>
              <input
                type="email"
                placeholder={user.email ? user.email : "email"}
              ></input>
              <input
                type="text"
                placeholder={user.name ? user.name : "name"}
              ></input>
              <input
                type="text"
                placeholder={user.street ? user.street : "street"}
              ></input>
              <input
                type="text"
                placeholder={user.suite ? user.suite : "suite"}
              ></input>
              <input
                type="text"
                placeholder={user.city ? user.city : "city"}
              ></input>
              <input
                type="text"
                placeholder={user.zipcode ? user.zipcode : "zipcode"}
              ></input>
              <input
                type="text"
                placeholder={user.lat ? user.lat : "lat"}
              ></input>
              <input
                type="text"
                placeholder={user.lng ? user.lng : "lng"}
              ></input>
              <input
                type="text"
                placeholder={user.phone ? user.phone : "phone"}
              ></input>
              <input
                type="text"
                placeholder={user.website ? user.website : "website"}
              ></input>
              <input
                type="text"
                placeholder={
                  user.companyName ? user.companyName : "companyName"
                }
              ></input>
              <input
                type="text"
                placeholder={
                  user.catchPhrase ? user.catchPhrase : "catchPhrase"
                }
              ></input>
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
