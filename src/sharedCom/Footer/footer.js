import React, { Component } from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="parentFooter row">
          {/*************** Form ************/}
          <div className="sec butt col-md-3 col-12">
            <button className="btnn">rory vaden</button>
          </div>

          {/*************** Links of pages ************/}
          <div className="col-md-9 col-12">
            {/* First Row */}
            <div className="sec links row">
              <div className="col-md-3">
                <a href="#" target="_blank">
                  Home
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" target="_blank">
                Social Media
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" target="_blank">
                Meet Rory
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" target="_blank">
                Personal branding
                </a>
              </div>
            </div>

            {/* Second Row */}
            <div className="sec2 links row">
              <div className="col-md-3">
                <a href="#" target="_blank">
                  Books
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" target="_blank">
                Free Trainings
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" target="_blank">
                Podcast
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" target="_blank">
                Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Social Mesia Links */}
        <div className="social row">
          <div className="col-md-5 col-12"></div>
          <div className="col-md-4 col-12">
            <a href="https://www.facebook.com/"><i class="facebook fab fa-facebook-f fa-2x"></i></a>
          	<a href="https://instagram.com/"><i class="instagram fab fa-instagram fa-2x"></i></a>
          	<a href="https://www.linkedin.com/"><i class="linkedin fab fa-linkedin-in fa-2x"></i></a>
          	<a href="https://twitter.com/"><i class="twitter fab fa-twitter fa-2x"></i></a> 
          	<a href="https://www.youtube.com/" > <i class="fab fa-youtube fa-2x youtube"></i> </a>
          </div>
          <div className="col-md-3 col-12"></div>
        </div>

        {/* Horizintal Line */}
        <div className="line">
          <div className="linee"></div>
        </div>

        {/*************** copyRight @ ************/}
        <div className="sec copyRight row">
          <div className="col-md-5 col-12"></div>
          <div className="col-md-4 col-12">
            <p>&copy;2021 Bucony.All Right Recived</p>
          </div>
          <div className="col-md-3 col-12"></div>
          
        </div>
            
      </div>
  );
}

export default Footer;
