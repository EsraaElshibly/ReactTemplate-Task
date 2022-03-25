import React, { Component } from "react";
import SharedBtn from "../SharedButton/SharedBtn";
import './LastSec.css'

class LastSec extends Component {
  render() {
    return (  
        <div className="fourthSec container">
            <div className="row">
                <div className="col-md-6 col-12 lefttSec">
                    <h3>
                    Meet Rory Vaden
                    </h3>
                    <p>
                    Rory Vaden is the New York Times bestselling author of Take the Stairs. His insights have been featured in the Wall Street Journal, Forbes, CNN, Entrepreneur, Inc, on Fox News national television and in several other major media outlets. As a world-renowned speaker, His Tedx talk has been viewed over 3 million times, he is a 2x World Champion of Public Speaking Finalist and he was recently named as one of the top 100 leadership speakers in the world by Inc Magazine. He is also the Co-Founder of Brand Builders Group where he teaches people how to grow their influence and build and monetize their personal brand. 
                    </p>
                    
                    <button className="bttn">Learn more</button>
                </div>
                <div className="col-md-6 col-12 righttSec">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1545406158725-P6H5C6QSLCKD4M994G5S/Favorite+Rory+Vaden+Stairs+onken_20181004_SummitOfGreatness_0385.jpg?format=750w" alt="rary" />
                </div>
            </div>
        </div>
    );
  }
}

export default LastSec;
