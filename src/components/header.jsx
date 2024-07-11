import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav id="navigation">
        <div className="wrapper">
          <Link
            id="nav-logo"
            to="/"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img height="40" src="./images/logo.png" alt="" />
            <h1 className="sitename">TetraWave</h1>
            <span id="logo-dot" className="">
              .
            </span>
          </Link>
          <div className="menu">
            <ul className="menu-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="questionare">Get Started</button>
          </div>
          <button
            aria-expanded="false"
            aria-label="Abrir menu"
            className="open-menu"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20H30"
                stroke="#00856F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 12H30"
                stroke="#00856F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 28L30 28"
                stroke="#00856F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            aria-expanded="true"
            aria-label="Fechar menu"
            className="close-menu"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L10 30M10 10L30 30"
                stroke="#FFFAF1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
