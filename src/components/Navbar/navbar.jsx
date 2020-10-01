import React from "react";
import logo from "../../assets/logo.png";
import "./nav-styles.css";

const Navbar = () => {
  const url = window.location.href;
  const current = url.replace(/.*#/, "");
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="d-flex flex-grow-1">
        <a className="navbar-brand" href="#/">
          <img src={logo} alt="Our Products" className="navbar-img" />
        </a>
        <div className="w-100 text-right">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div
        className="collapse navbar-collapse flex-grow-1 text-right"
        id="myNavbar"
      >
        <ul className="navbar-nav ml-auto flex-nowrap">
          <li className="nav-item nav-link">
            <a
              href="#/projects"
              className={
                current === "/projects"
                  ? "nav-link m-2 menu-item nav-active underline"
                  : "nav-link m-2 menu-item nav-active"
              }
            >
              Proyectos
            </a>
          </li>
          <li className="nav-item nav-link">
            <a
              href="#/services"
              className={
                current === "/services"
                  ? "nav-link m-2 menu-item nav-active underline"
                  : "nav-link m-2 menu-item nav-active"
              }
            >
              Servicios
            </a>
          </li>
          <li className="nav-item nav-link">
            <a
              href="#/about"
              className={
                current === "/about"
                  ? "nav-link m-2 menu-item nav-active underline"
                  : "nav-link m-2 menu-item nav-active"
              }
            >
              A cerca de
            </a>
          </li>
          <li className="nav-item nav-link">
            <a
              href="#/contact"
              className={
                current === "/contact"
                  ? "nav-link m-2 menu-item nav-active underline"
                  : "nav-link m-2 menu-item nav-active"
              }
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
