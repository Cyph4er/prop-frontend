import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Personic from "../resources/img/person.png"
import Keyic from "../resources/img/key.png"
import "../resources/css/login.css"

export default function Login(props){
  const history = useHistory();

  // const required = value => {
  //   if (!value) {
  //     return (
  //       <div className="alert alert-danger" role="alert">
  //         This field is required!
  //       </div>
  //     );
  //   }
  // };
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onChangeUsername(e){
    setUsername(e.target.value);
  }
  function onChangePassword(e){
    setPassword(e.target.value);
  }
  
  function handleLogin(e){
    e.preventDefault();

    if(username === 'user' && password === 'user'){
      localStorage.setItem("user", "user");

      history.push("/dashboard");
      window.location.reload();
    } else{
      return (
        <div className="alert alert-danger" role="alert">
          Incorrect login details!
        </div>
      );
  
    }
  }

  return(
    <>
    <div className="container-fluid p-5 bgimg">
      <div className="row">
        <div className="col-3 signin-details p-5">
          <h1 className="hightopm mb-4 greenc">SIGN-IN</h1>
          <form onSubmit={handleLogin}>
          <div className="row">
            <div className="row mb-4">
              <div className="col-2">
                <img src={Personic} alt="" className="loginicon img-responsive"/>
              </div>
              <div className="col-9">
                <input
                  className="form-login"
                  type="text"
                  required
                  onChange={onChangeUsername}
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-2 ">
                <img src={Keyic} alt="" className="loginicon img-responsive"/>
              </div>
              <div className="col-9">
                <input
                  className="form-login"
                  type="password"
                  required
                  onChange={onChangePassword}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              
              <input
                type="submit"
                className="btn loginbtn greenc"
                value="Login"
                // onClick={handleLogin}
              />
              
            </div>
          </div>
          </form>
        </div>
        <div className="col-6 ">
          <h1 className="greenc fw-bolder hightopm">
            PROPERTY <br/><br/>MANAGEMENT <br/><br/>SYSTEM
          </h1>
        </div>
      </div>
    </div>
    </>
  )
}