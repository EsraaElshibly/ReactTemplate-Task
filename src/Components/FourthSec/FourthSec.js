import React, { Component } from "react";
import './FourthSec.css'

class FourthSec extends Component {
  render() {
    return (  
        <div className="fourthSec container">
            
            <div className="row">
                <div className="col-md-6 col-12 lefttSec">
                    <h3>
                    PROCRASTINATION IS THE MOST EXPENSIVE INVISIBLE COST IN BUSINESS TODAY.
                    </h3>
                    <p>
                    If you can’t figure out how to inspire and influence people to do something different, then you and they will both stay stuck in the status quo. 
                    </p>
                    <p>You won’t grow revenues. </p>
                    <p>You won’t grow your reach. </p>
                    <p>You won’t grow your engagement.</p>
                    <p>You won’t grow your organization.</p>
                    <p>You won’t grow other leaders. </p>
                    <p>
                    This is the greatest risk of every organization and every leader because it puts you at vulnerable risk of becoming antiquated, mediocre, outperformed and ultimately irrelevant. 
                    </p>
                    <button className="bttn">request speaking information</button>
                </div>
                <div className="col-md-6 col-12 righttSec">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1586799285079-DDG2QNHQ3X4OTYIXP5YH/Rory+Vaden+Official+Headshot?format=1000w" alt="rary" />
                </div>
            </div>
        </div>
    );
  }
}

export default FourthSec;
