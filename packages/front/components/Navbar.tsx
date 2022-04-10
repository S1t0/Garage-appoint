import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const NavBar=()=>(
  <div className="container">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">GARAGE-APPOINTMENT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Calendario">Calendar</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Your dates</a>
      </li>
    </ul>
  </div>
</nav>
</div>
);

export default NavBar;