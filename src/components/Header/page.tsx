"use client";
import React from "react";

// import "../../../node_modules/bootstrap/dist/css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
               className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Our Missions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Career
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
               className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
               className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              >
                Portfolio
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    App Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
            <a
              href="/resources"
              className="nav-link active"
              aria-current="page"
            >
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a href="/pricing" className="nav-link active" aria-current="page">
              Pricing
            </a>
          </li> */}
            <li className="nav-item">
              <a
               className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              >
                Careers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Web Projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    App Projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Case Studies
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
               className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
              >
                Contact Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Contact Form
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Location/Map
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Social Links
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
            <a
              href="/get-in-touch"
              className="nav-link active"
              aria-current="page"
            >
              Get In Touch
            </a>
          </li> */}
            <button className="btn btn-primary">Partner Login</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
