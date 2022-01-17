import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Personic from "../resources/img/person.png"
import Keyic from "../resources/img/key.png"
import "../resources/css/adduser.css"

export default function AddUser(props){
 
  function saveUser(){
    // var data = {
    //   name: username,
    //   id: id,
    //   mobilenumber: mobileNumber,
    //   emailaddress: emailAddress
    // };
    // PropertyDataService.create(data).then(response => {
      
    //     setUsername(response.data.username);
    //     setId(response.data.title);
    //     setMobileNumber(response.data.title;
    //     setEmailAddress(response.data.title);
    
    //     setSubmitted(true); //set after data is passed
      
    //   console.log(response.data);
    // }).catch(e => {
    //   console.log(e);
    // });
    //data to be used to pass information to backend with the appropriate func
    setSubmitted(true); //set after data is passed
  }


  //Adding a New Person to the back-end
  const [username, setUsername] = useState('');
  const [id, setId] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  
  function newUser(){
    setUsername();
    setId();
    setMobileNumber();
    setEmailAddress();

    setSubmitted(false);
  }

  return(
    <>
    <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newProperty}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="User Name">User Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                required
                value={username}
                onChange={(e) =>{
                  setUserName(e.target.value);
                }}
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="id">Enter Id</label>
              <input
                type="nummber"
                className="form-control"
                id="id"
                required
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                name="id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile nummber">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="mobileNumber"
                required
                value={mobileNumber}
                onChange={(e) => {
                  setAccomType(e.target.value);
                }}
                name="mobileNumber"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email address">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="emailAddress"
                required
                value={emailAddress}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name="address"
              />
            </div>
            <button onClick={saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  )
}