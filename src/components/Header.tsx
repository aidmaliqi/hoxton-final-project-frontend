import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ComponentStyles/Header.css";
import "./ComponentStyles/slideshow.css";

export function Header({signOut} : any) {
  return (
    <>
      <nav
        id="navvbar"
        className="navbar navbar-expand-lg navbar-light bg-white "
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flyone-logo-1.1.svg/512px-Flyone-logo-1.1.svg.png
          "
                height="15"
                alt="MDB Logo"
                loading="lazy"
                className="logoo"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to={"/home"}>Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to={"/profile"}>Profile</Link>
                </a>
              </li>
              <li className="nav-item" onClick={() => {
                signOut()
              }}>
                <a className="nav-link" href="#">
                  <Link to={"/login"}>Sign Out</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to={"/login"}>login</Link>
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <Link to={"/home"}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="45"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
