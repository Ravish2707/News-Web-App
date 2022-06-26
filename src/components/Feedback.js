import React, { useState } from "react";
import '../feedback.css'

function Feedback() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");

    const sendFeedback = async(e) => {
        e.preventDefault();
        console.log(name, email, phone, description);
        const response = await fetch('http://127.0.0.1:5000/createAccount', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone, description })
        });
        const data = await response.json();
        console.log(data);
    }
  return (
    <div>
      <h2>FEED BACK FORM</h2>

      <div class="container">
        <form>
          <div class="row">
            <div class="col-25">
              <label for="name">Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="email">Mail Id</label>
            </div>
            <div class="col-75">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="email">Phone Number</label>
            </div>
            <div class="col-75">
              <input
                type="phone"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="7834******"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="feedback">Feed Back</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write something.."
                style={{ height: 200}}
              ></textarea>
            </div>
          </div>
          <div class="row">
            <button type="button" onClick={sendFeedback}>Send Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
