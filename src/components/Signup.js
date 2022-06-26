import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitDetails = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, password, confirmPassword);
    const response = await fetch("http://127.0.0.1:5000/createAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, phone })
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
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required=""
            />
            <label>Username*</label>
          </div>
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
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required=""
            />
            <label>Phone Number*</label>
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
          <div class="user-box">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required=""
            />
            <label>Repeat Password*</label>
          </div>
          <center>
            <button class="btnSignup" onClick={submitDetails}>
              {" "}
              SIGNUP <br />{" "}
            </button>
          </center>
        </form>
        <h6 className="my-4 text-center">
          <Link to="/login">Already have an account? <span class="sp">Sign in</span></Link>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
