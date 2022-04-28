import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar nav_black">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand text-danger fern" href="#">
          Fern Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-danger"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            backgroundColor: "black",
            position: "relative",
            left: "-40px",
            paddingLeft: "40px",
            marginRight: "-60px",
          }}
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link
                to="/popularmovies"
                className="nav-link text-danger"
                href="#"
              >
                Popular Movies
              </Link>
            </li>
            <li className="nav-item1 ml-5">
              <Link
                to="/latestmovies"
                className="nav-link text-danger"
                href="#"
              >
                Latest Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
