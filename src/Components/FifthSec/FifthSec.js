import React, { Component } from "react";
import './FifthSec.css'

class FifthSec extends Component {
  render() {
    return (  
        <div className="fifthSec container">
            <div className="row">
                <div className="col-md-6 col-12 leftSec">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543850718265-5DHZPELZCCSOVNYK5OJJ/book.png?format=750w" alt="rory" />
                </div>
                <div className="col-md-6 col-12 rightSec">
                    <h3>
                    NEW  YORK TIMES BESTSELLING AUTHOR AND HALL OF FAME SPEAKER, RORY VADEN IS THE WORLD’S LEADING EXPERT IN THE PSYCHOLOGY OF LEADERSHIP AND INFLUENCE
                    </h3>
                    <p>
                    Rory Vaden has dedicated his entire life to the study of leadership and influence. His education and experience took him all the way from being raised by a single mother in a trailer park to becoming a New York Times bestselling author, a world renowned Hall of Fame keynote speaker, and an Eight-Figure entrepreneur.
                    </p>
                    <p>
                    He has developed dozens of insights, frameworks and methodologies that led to a viral Ted talk and have been used by some of the most successful organizations in the world to mobilize their sales forces, develop their leaders and move their people into action. 
                    </p>
                </div>
            </div>
        </div>
    );
  }
}

export default FifthSec;
