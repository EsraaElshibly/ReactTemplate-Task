import React, { Component } from "react";
import "./featured.css";

class FeaturedCom extends Component {
  render() {
    return (  
        <div className="featured ">
            <div className="featuredSpace"></div>
            <h3>Rory's insights have been featured in:</h3>
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-2">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848380978-MWUKDQK55UN05PW6Q7IZ/1wsj.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848495819-1T25XUJWR7AMNWF3HF55/4-usa.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848572451-PL2N3HLI6Q7KYW0VJFRJ/8-forbes.png?format=300w" alt="logoCompany" title="logoCompany" />
                </div>
                <div className="col-md-3 col-2">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848380978-MWUKDQK55UN05PW6Q7IZ/1wsj.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848495819-E6OQZKTJTGR7RO7K0BJ9/5-entreprenuer.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848495819-1T25XUJWR7AMNWF3HF55/4-usa.png?format=300w" alt="logoCompany" title="logoCompany" />
                </div>
                <div className="col-md-3 col-2">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848431555-6AAVWEF0FJ0K3WLTNQ5I/2-fastcompany.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848572012-A2XABQJOY5DS9T4RTSYO/6-inc.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1628197482782-K4F2ONVOPD1EJ1KVD7ZM/foxnews-removebg-preview.png?format=300w" alt="logoCompany" title="logoCompany" />
                </div>
                <div className="col-md-3 col-2">
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848508472-M8OYYDXRDJGGZUXVE13J/3-cnn.png?format=300w" alt="logoCompany" title="logoCompany" />
                    <img src="https://images.squarespace-cdn.com/content/v1/5be26d06b105984a735b8d1a/1543848572048-4STRCSELP565RW4NK1OP/7-ny.png?format=300w" alt="logoCompany" title="logoCompany" />
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default FeaturedCom;
