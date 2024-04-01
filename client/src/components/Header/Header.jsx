import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">
          <strong>XYZ</strong> <em>Industries</em>
        </span>
      </div>
      <div className="header__center">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link">
                About Us
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link">
                Property
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link">
                Services
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <Link to="/" className="btn-primary btn-primary__outline">
          Sign Up
        </Link>
        <Link to="/" className="btn-primary btn-primary__solid">
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
