import React, { Component } from "react";
import './ThirdSec.css'

class ThirdSec extends Component {
  render() {
    return (  
        <div className="thirdSec container">
            <div className="space"></div>
            <div className="row">
                <div className="col-md-6 col-12 leftSec">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1547226047595-524MC1JZLV07URM4BKAT/home_reputation.png?format=750w" alt="rory" />
                </div>
                <div className="col-md-6 col-12 rightSec">
                    <h3>
                    LEARN THE PSYCHOLOGY OF LEADERSHIP, INFLUENCE, AND MOVING PEOPLE TO ACTION
                    </h3>
                    <p>
                    Leadership is the art of moving people into productive action. As you become a better leader you will get more opportunity, have more influence, earn more income and make more impact.
                    </p>
                    <p>
                    But whether you’re trying to lead yourself or a team, the problem you’re up against is procrastination.
                    </p>
                    <p>
                    In most cases people don’t want to move. They don’t want to change. They don’t want to act. And so instead they fall victim to distraction, dilution, complacency, and stalled productivity.
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default ThirdSec;
