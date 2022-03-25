import React, { Component } from "react";
import "./FirstSec.css";
import Dialog from "../Dialog/Dialog";

class FirstSec extends Component {
  render() {
    return (
      <div className="firstSec">
        <div className="container">
        <button className="btnn">rory vaden</button>
        <div className="line"></div>
        <div className="design">
          <h2>Become a More <br></br> Influential Leaser</h2>
          <p>
            see why new york times bestselling author and hall of fame leasership speaker
          </p>
          <p><span>rory vaden</span></p>
          <p>is the perfect choice to keynote your next event</p>
        </div>

        <div className="buttons">
          <button>watch rory's video</button>
          <button className="bttn">request speaking information</button>
        </div>
        </div>

        <Dialog />
      </div>
    );
  }
}

export default FirstSec;
