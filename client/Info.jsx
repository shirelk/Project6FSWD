import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "./Popup";
function Info() {
  const [buttonChangePassword, setButtonChangePassword] = useState(false);
  const [buttonEditInfo, setButtonEditInfo] = useState(false);
  const [buttonDeleteUser, setButtonDeleteUser] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("ourUser")));

  async function saveNewPass() {
    let newPass = document.getElementById("newPass");
    // save new password in database
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

  async function saveNewInfo() {
    let newUsername = document.getElementById("newUsername");
    let newEmail = document.getElementById("newEmail");
    let newName = document.getElementById("newName");
    let newStreet = document.getElementById("newStreet");
    let newSuite = document.getElementById("newSuite");
    let newCity = document.getElementById("newCity");
    let newZipcode = document.getElementById("newZipcode");
    let newLat = document.getElementById("newLat");
    let newLng = document.getElementById("newLng");
    let newPhone = document.getElementById("newPhone");
    let newWebsite = document.getElementById("newWebsite");
    let newCompanyName = document.getElementById("newCompanyName");
    let newBs = document.getElementById("newBs");

    const updatedUser = {
      ...user,
      username: newUsername.value ? newUsername.value : user.username,
      email: newEmail.value ? newEmail.value : user.email,
      name: newName.value ? newName.value : user.name,
      street: newStreet.value ? newStreet.value : user.street,
      suite: newSuite.value ? newSuite.value : user.suite,
      city: newCity.value ? newCity.value : user.city,
      zipcode: newZipcode.value ? newZipcode.value : user.zipcode,
      lat: newLat.value ? newLat.value : user.lat,
      lng: newLng.value ? newLng.value : user.lng,
      phone: newPhone.value ? newPhone.value : user.phone,
      website: newWebsite.value ? newWebsite.value : user.website,
      companyName: newCompanyName.value
        ? newCompanyName.value
        : user.companyName,
      catchPhrase: newBs.value ? newBs.value : user.catchPhrase,
    };
    console.log(updatedUser);
    // save new info in database
    await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    setUser(updatedUser);
    localStorage.setItem("ourUser", JSON.stringify(updatedUser));
  }

   const deleteUser = async() =>{
    // check if password matches
    let password = document.getElementById("password");
    console.log(password.value);
    const usertoDeleted = await fetch(
      `http://localhost:3000/users_passwords/${user.username}`
    ).then((response) => response.json());
    if (password.value !== usertoDeleted.password) {
      alert("wrong password");
      return;
    }
    // delete user from users table
    await fetch(`http://localhost:3000/users/${user.id}`, {
      method: "DELETE",
    });

    // delete user from users_passwords table
    await fetch(`http://localhost:3000/users_passwords/${user.id}`, {
      method: "DELETE",
    });

    // delete user from posts table
    localStorage.removeItem("ourUser");
    window.location.href = "/";
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
            website: {user.website}
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
          <Popup
            trigger={buttonEditInfo}
            setTrigger={setButtonEditInfo}
            setSave={saveNewInfo}
          >
            <div className="popup-div">
              {console.log("edit info popup")}
              <h3>Edit info</h3>
              {console.log(user.username)}
              <input
                id="newUsername"
                type="text"
                placeholder={user.username ? user.username : "username"}
              ></input>
              <input
                id="newEmail"
                type="email"
                placeholder={user.email ? user.email : "email"}
              ></input>
              <input
                id="newName"
                type="text"
                placeholder={user.name ? user.name : "name"}
              ></input>
              <input
                id="newStreet"
                type="text"
                placeholder={user.street ? user.street : "street"}
              ></input>
              <input
                id="newSuite"
                type="text"
                placeholder={user.suite ? user.suite : "suite"}
              ></input>
              <input
                id="newCity"
                type="text"
                placeholder={user.city ? user.city : "city"}
              ></input>
              <input
                id="newZipcode"
                type="text"
                placeholder={user.zipcode ? user.zipcode : "zipcode"}
              ></input>
              <input
                id="newLat"
                type="text"
                placeholder={user.lat ? user.lat : "lat"}
              ></input>
              <input
                id="newLng"
                type="text"
                placeholder={user.lng ? user.lng : "lng"}
              ></input>
              <input
                id="newPhone"
                type="text"
                placeholder={user.phone ? user.phone : "phone"}
              ></input>
              <input
                id="newWebsite"
                type="text"
                placeholder={user.website ? user.website : "website"}
              ></input>
              <input
                id="newCompanyName"
                type="text"
                placeholder={
                  user.companyName ? user.companyName : "companyName"
                }
              ></input>
              <input
                id="newBs"
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
          <Popup
            trigger={buttonDeleteUser}
            setTrigger={setButtonDeleteUser}
            setSave={deleteUser}
          >
            <div className="popup-div">
              {console.log("delete user popup")}
              <h3>Are you sure you want to delete the user?</h3>
              <h5>enter your password to confirm:</h5>
              <input
                id="password"
                type="password"
                placeholder="password"
              ></input>
            </div>
          </Popup>
        </div>
      </div>
    );
  }
  return <>{getInfo()}</>;
}

export default Info;
