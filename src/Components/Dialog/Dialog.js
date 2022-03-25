import React, { Component } from "react";
import "./Dialog.css";

class Dialog extends Component {
  render() {
    return (  
        <div className="dialog container">
            <h4>get rory's Influential leaser video course free</h4>
            <p>when you sign up to recive his blog updates via email</p>
            <input className="input" placeholder="Email" type="text" />
            <button className="bttn">sign up</button>
        </div>
    );
  }
}

export default Dialog;
