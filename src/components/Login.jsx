import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitDetails = async (e) => {
    e.preventDefault();
    console.log(email,password);
    const response = await fetch("http://127.0.0.1:5000/createAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    });
    const responseData = await response.json();
    console.log(responseData)
  };
  return (
    <div>
      <div class="login-box">
        <h2 class="heading">Signup</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <label>Email address*</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required=""
            />
            <label>Password*</label>
          </div>
          <center>
            <button class="btnSignup" onClick={submitDetails}>
              {" "}
              LOGIN <br />{" "}
            </button>
          </center>
        </form>
        <h6 className="my-4 text-center">
          <Link to="/signup">Not have an account? <span class="sp">Sign Up</span></Link> 
        </h6>
      </div>
    </div>
  );
}

export default Signup;
