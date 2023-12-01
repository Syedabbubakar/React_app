import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/Login.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


  const navigate = useNavigate();
  const [uName, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const notifyError = () => toast.error("Invalid credential")
  const notifySuccess = () => toast.success("Successfully login")
  // const handleLogin = () => {
  //   if (
  //     uName === localStorage.getItem("name") &&
  //     Password === localStorage.getItem("password")
  //   ) {
  //     console.log("Login successful! Redirect to homepage.");
  //     navigate("/home");
  //   } else {
  //     setError(alert("Wrong username or password. Please try again."));
  //   }
  // };

  const submitHandle = (e) => {
    e.preventDefault();
  
    if (
      uName === localStorage.getItem("name") &&
      Password === localStorage.getItem("password")
    ) {
      notifySuccess()
      navigate("/home");
    } else {
      notifyError()
    }
  };

  return (
    
    <div className="background-container">
      <ToastContainer />
      <div className="content">
        <div className="flex-div">
          {/* <h1>{localStorage.getItem("name")}</h1> */}
          <form onSubmit={submitHandle}>
            <input
              type="text"
              value={uName}
              placeholder="Email or Phone Number"
              onChange={(e) => setUname(e.target.value)}
            />
            <input
              type="password"
              value={Password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login">
              Log In
            </button>
            {error && <p style={{ color: "white" }}>{error}</p>}
            <Link>Forgot Password ?</Link>
            <hr />
            <button
              className="create-account"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>

           
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
