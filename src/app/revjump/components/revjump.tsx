"use client";

// import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Revjump = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const init = () => {
        AOS.init({
          duration: 900,
          once: true,
          easing: "ease-in-out",
          offset: 80,
          delay: 100,
        });
      };
      init();

      // Use RAF to handle delayed hydration after refresh
      const timer = requestAnimationFrame(() => {
        AOS.refreshHard();
      });

      return () => cancelAnimationFrame(timer);
    }
  }, []);

  return (
    <div className="bg-light text-dark">
      <section
        className="text-white text-center py-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%)",
          }}
        />
        <div className="container position-relative py-5" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3 text-shadow-lg text-white">
            Revjump
          </h1>
          <p className="lead mb-4 opacity-75 fs-5">
            Revolutionizing Property Management with Data-Driven Insights
          </p>
          <button className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold">
            Service Based Web Platform
          </button>
        </div>
      </section>
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Project Overview
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <strong>Headquarters:</strong> United States
                </li>
                <li className="mb-2">
                  <strong>Industry:</strong>Real Estate / Property Management
                  (PropTech)
                </li>
                <li className="mb-2">
                  <strong>Services:</strong>Web Development, Web Design
                </li>
                <li>
                  <strong>User Personas:</strong>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {["Admin", "User"].map((role, i) => (
                      <span
                        key={i}
                        className="badge rounded-pill px-3 py-2 shadow-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                        }}>
                        {role}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">
                The Client
              </h4>
              <p className="text-muted">
                Revjump is a real estate management firm that oversees a diverse
                portfolio of residential and commercial properties. They
                required a centralized platform to monitor property performance,
                analyze revenue and expenses, and track customer ratings in real
                time. Their primary goal was to gain actionable insights into
                profitability and tenant satisfaction, enabling data-driven
                decision-making and improved operational efficiency across all
                managed properties.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =======Technology Used and About the project======== */}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Technologies Used
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <span>Web Framework</span>
                  <span>.NET, Angular</span>
                </li>
                <li className="mb-2">
                  <span>Frontend</span>
                  <span>Angular</span>
                </li>
                <li className="mb-2">
                  <span>Backend</span>
                  <span>.NET</span>
                </li>
                <li className="mb-2">
                  <span>Database</span>
                  <span>MSSQL</span>
                </li>
                <li className="mb-2">
                  <span>Third Party Integration</span>
                  <span>ng2-charts, Chart.js, jspdf, html2canvas</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">
                About The Project
              </h4>
              <p className="text-muted">
                Revjump is a comprehensive Property Management and Revenue
                Analytics System designed to help real estate businesses
                efficiently manage their property portfolios. It enables users
                to track revenue, monitor expenses, analyze ratings, and gain
                actionable insights into overall property performance. The
                platform features an AI-powered chatbot that enhances user
                experience by providing instant assistance and data-driven
                responses. It also includes role-based access control to ensure
                secure and personalized access for different user roles, along
                with customizable application settings for flexibility in
                operations. With its interactive dashboards and real-time
                analytics, the system empowers property managers and owners to
                make informed financial and operational decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=== Challenges And Solutions ===*/}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Challenges
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Handling multiple properties with varying revenue, expenses,
                  and rating structures made data consistency and accuracy a key
                  concern.
                </li>
                <li className="mb-2">
                  Different user roles (Admin, Manager, Accountant) required
                  varying levels of access and permissions to sensitive
                  financial data.
                </li>
                <li className="mb-2">
                  Users needed quick assistance to navigate features and
                  retrieve financial insights without external help.
                </li>
                <li className="mb-2">
                  Large volumes of financial and operational data needed to be
                  presented clearly for better decision-making.
                </li>
                <li className="mb-2">
                  The platform needed to support future expansion and allow
                  flexibility in settings like currency, tax, and data
                  visibility.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">Solutions</h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Designed a centralized data model and automated calculation
                  logic to ensure real-time synchronization and accurate
                  financial reporting across all properties.
                </li>
                <li className="mb-2">
                  Implemented a role-based access control (RBAC) system with
                  authentication and authorization layers using JWT tokens to
                  maintain data privacy and security.
                </li>
                <li className="mb-2">
                  Integrated an AI-driven chatbot capable of responding to
                  property, revenue, and expense-related queries, improving
                  overall usability and responsiveness.
                </li>
                <li className="mb-2">
                  Used interactive charts and dashboards (Chart.js / ng2-charts)
                  to visualize trends in revenue, expenses, and ratings for easy
                  interpretation.
                </li>
                <li className="mb-2">
                  Developed a modular, API-driven architecture with customizable
                  application settings to adapt to different business needs and
                  ensure scalability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*======== Main Features ======*/}
      <section
        className="py-5 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold h1 text-center text-primary mb-5">
            Main Features
          </h2>
          <ul className="list-unstyled small">
            <ul>
              <li className="mb-4">
                <h4 className="h2">Dashboard</h4>
                <p className="text-muted">
                  An overview of key metrics including total revenue, expenses,
                  and average ratings across all properties.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="h2">AI Chatbot</h4>
                <p className="text-muted">
                  An AI-powered chatbot that assists users with queries related
                  to property performance, revenue reports, and expense
                  tracking.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="h2">User Lists</h4>
                <p className="text-muted">
                  Manage different user roles with specific permissions and
                  access levels.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="h2">Roles And Permissions</h4>
                <p className="text-muted">
                  Role-based access control to ensure secure and appropriate
                  data visibility.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="h2">Property Expenses</h4>
                <p className="text-muted">
                  Track and categorize expenses for each property.
                </p>
              </li>
              <li className="mb-4">
                <h4 className="h2">Revenue Tracking</h4>
                <p className="text-muted">
                  Monitor rental income and other revenue streams for
                  properties.
                </p>
              </li>
            </ul>
          </ul>
        </div>
      </section>
      <section
        className="py-5 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          {/* <div>
            <h1>Overview</h1>
            <p>
              The Inception Fertility platform presents fertility guidance and
              products through an elegant, medically informative interface
              designed for easy navigation and optimal SEO performance.{" "}
            </p>
          </div> */}
          <h2 className="fw-bold text-center text-primary mb-5">
            Project Highlights 
          </h2>
          <div className="row g-4">
            {[
              "Developed a comprehensive property management system to track revenue, expenses, and customer ratings in real time.",
              "Integrated an AI-powered chatbot to assist users with queries, reports, and property insights.",
              "Implemented role-based permissions ensuring secure and controlled feature access for different user types.",
              "Added customizable application settings for configuration of preferences like currency, tax rates, and data visibility.",
              "Provided interactive analytics dashboards with visual reports using Chart.js / ng2-charts for better decision-making.",
            ].map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div
                  className="card border-0 h-100 shadow-lg rounded-4 text-center p-4 hover-zoom"
                  style={{
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0,0,0,0.1)";
                  }}>
                  <i className="bi bi-lightning-charge-fill text-warning fs-1 mb-3"></i>
                  <p className="fw-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== Final Result ===== */}
      <section className="py-5 text-center bg-white" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">The Result </h2>
          <p className=" fs-5">
            <span className="fw-bold fs-4 text-dark">95%</span> User
            Satisfaction Rate <br />
            <span className="fw-bold fs-4 text-dark">40%</span> Increase in
            Operational Efficiency <br />
            <span className="fw-bold fs-4 text-dark">30%</span> Growth in
            Revenue Across Managed Properties
          </p>
          <blockquote className="blockquote fst-italic text-primary mt-4">
            “Project-first approach. Excellent results. Premium client
            satisfaction. “That's why our Client love working with us.
          </blockquote>
        </div>
      </section>

      {/* ===== Custom Styles ===== */}
      <style jsx>{`
        .image-wrapper {
          overflow: hidden;
        }
        .image-wrapper:hover img {
          transform: scale(1.05);
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .image-wrapper:hover .overlay {
          opacity: 1;
        }
        .fullscreen-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 1050;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Revjump;
