import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Meet rory">Meet rory</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Podcast">Podcast</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Books">Books</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Speaking">Speaking</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Media">Media</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Personal branding">Personal branding</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Blog">Blog</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Free Training">Free Training</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <button className="nav-btn">SIGN UP NOW!</button>
        
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Nav;
