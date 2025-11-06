"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Revjump: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Proper AOS initialization fix for Next.js
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

      const timer = requestAnimationFrame(() => {
        AOS.refreshHard();
      });

      return () => cancelAnimationFrame(timer);
    }
  }, []);

  // Example images if you have visuals for this project
  const images = [
    "dashboard.png",
    "analytics.png",
    "chatbot.png",
    "admin_panel.png",
  ];

  return (
    <div className="bg-light text-dark">
      {/* ===== Hero Section ===== */}
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
          <h1 className="fw-bold mb-3 text-shadow-lg text-white h2">Revjump</h1>
          <p className="lead mb-4 opacity-75 fs-5">
            Revolutionizing Property Management with Data-Driven Insights
          </p>
          <button className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold">
            Service Based Web Platform
          </button>
        </div>
      </section>

      {/* ===== Project Overview & Client ===== */}
      <section className="container py-5">
        <div className="vstack gap-4">
          <div className="row g-4 align-items-stretch">
            {/* Project Overview */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Project Overview</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <strong>Headquarters:</strong> United States
                  </li>
                  <li className="mb-2">
                    <strong>Industry:</strong> Real Estate / Property Management
                    (PropTech)
                  </li>
                  <li className="mb-2">
                    <strong>Services:</strong> Web Development, Web Design
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

            {/* The Client */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">The Client</h4>
                <p className="text-muted">
                  Revjump is a real estate management firm that oversees a
                  diverse portfolio of properties. They required a centralized
                  platform to monitor property performance, analyze revenue and
                  expenses, and track customer ratings in real time — enabling
                  data-driven decision-making and improved operational
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies & About Project */}
          <div className="row g-4 align-items-stretch">
            {/* Technologies Used */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Technologies Used</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <span>Web Framework: </span>
                    <span>.NET, Angular</span>
                  </li>
                  <li className="mb-2">
                    <span>Frontend: </span>
                    <span>Angular</span>
                  </li>
                  <li className="mb-2">
                    <span>Backend: </span>
                    <span>.NET</span>
                  </li>
                  <li className="mb-2">
                    <span>Database: </span>
                    <span>MSSQL</span>
                  </li>
                  <li className="mb-2">
                    <span>Third Party Integration: </span>
                    <span>ng2-charts, Chart.js, jspdf, html2canvas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* About The Project */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">About The Project</h4>
                <p className="text-muted">
                  Revjump is a comprehensive Property Management and Revenue
                  Analytics System that enables users to track revenue, monitor
                  expenses, analyze ratings, and gain insights into performance.
                  It features an AI chatbot, role-based access control, and
                  customizable application settings — all designed for scalable
                  and data-driven property management.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="row g-4 align-items-stretch">
            {/* Challenges */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Challenges</h4>
                <ul className="list-unstyled small">
                  <li>Managing multi-property financial data consistently.</li>
                  <li>
                    Role-based access for Admins, Managers, and Accountants.
                  </li>
                  <li>Need for quick in-app support using AI.</li>
                  <li>Large data visualization requirements.</li>
                  <li>Scalability and flexible configuration support.</li>
                </ul>
              </div>
            </div>

            {/* Solutions */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">Solutions</h4>
                <ul className="list-unstyled small">
                  <li>
                    Centralized data model ensuring real-time synchronization
                    and accurate reporting.
                  </li>
                  <li>
                    RBAC system using JWT for secure access to sensitive data.
                  </li>
                  <li>
                    Integrated AI chatbot for property and finance-related
                    queries.
                  </li>
                  <li>
                    Interactive dashboards built with ng2-charts and Chart.js.
                  </li>
                  <li>
                    Modular, scalable architecture with configurable app
                    settings.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main Features ===== */}
      <section
        className="py-5 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold h1 text-center text-primary mb-5">
            Main Features
          </h2>
          <div className="row g-4 align-items-stretch">
            {[
              {
                title: "Dashboard",
                desc: "Overview of revenue, expenses, and property ratings.",
              },
              {
                title: "AI Chatbot",
                desc: "AI-driven chatbot assisting with reports and queries.",
              },
              {
                title: "User Lists",
                desc: "Manage different roles and permissions effectively.",
              },
              {
                title: "Roles & Permissions",
                desc: "Secure, role-based data access control system.",
              },
              {
                title: "Property Expenses",
                desc: "Track and categorize expenses per property.",
              },
              {
                title: "Revenue Tracking",
                desc: "Monitor rental income and revenue streams.",
              },
            ].map((feature, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                  <h4 className="fw-bold text-primary mb-3">{feature.title}</h4>
                  <p className="small mb-0 text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section
        className="py-3 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center text-primary mb-5">
            Project Highlights
          </h2>
          <div className="row g-4">
            {[
              "Comprehensive property management system.",
              "AI-powered chatbot integration.",
              "Role-based secure feature access.",
              "Customizable app settings.",
              "Interactive analytics dashboards.",
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

      {/* ===== Result Section ===== */}
      <section className="py-5 text-center bg-white" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">The Result</h2>
          <p className="fs-5 text-muted">
            <strong>95%</strong> User Satisfaction Rate <br />
            <strong>40%</strong> Increase in Operational Efficiency <br />
            <strong>30%</strong> Growth in Revenue
          </p>
          <blockquote className="blockquote fst-italic text-primary mt-4">
            “Project-first approach. Excellent results. Premium client
            satisfaction.”
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Revjump;
