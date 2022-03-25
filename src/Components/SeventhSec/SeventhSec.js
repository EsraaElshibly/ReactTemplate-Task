import React, { Component } from "react";
import './SeventhSec.css'

class SeventhSec extends Component {
  render() {
    return (  
        <div className="thirdSec container">
            <div className="row">
                <div className="col-md-6 col-12 leftSec">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1545405778877-HNRY34M2O9E2E2P80YEI/A+Rory_Vaden_Crown_Council_02.2017-102_wide+audience+close+color.jpg?format=750w" alt="rory" />
                </div>
                <div className="col-md-6 col-12 rightSec">
                    <h3>
                    Popular Keynote Programs
                    </h3>
                    <ul>
                        <li>Take the Stairs (Motivation and Inspiration)</li>
                        <li>Multiply Your Time (Performance and Productivity)</li>
                        <li>The Influential Leader (Leadership and Teamwork)</li>
                        <li>Influential Personal Brand (Influence and Digital Marketing)</li>
                        <li>Rock Solid Reputation (Culture and Customer Experience)</li>
                        <li>Design a Custom Program</li>
                    </ul>
                    <button className="bttn">request speaking information</button>
                </div>
            </div>
        </div>
    );
  }
}

export default SeventhSec;
