"use client"; // ✅ Keep this at top to safely use AOS (client-side only) — ensures nothing breaks

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Clymb: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ AOS Initialization (Safe for Next.js SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOSModule) => {
        const AOS = AOSModule.default;
        AOS.init({
          duration: 900,
          once: true,
          easing: "ease-in-out",
          offset: 80,
          delay: 100,
        });
        setTimeout(() => {
          AOS.refresh();
        }, 500);
      });
    }
  }, []);

  const images = [
    "compass_dashboard.png",
    "clymb_dasboard.png",
    "schools.png",
    "cc_list.png",
    "cc_dashboard.png",
    "badges.png",
    "journal.png",
    "afh_list.png",
    "afh_question.png",
    "sel_analytics.png",
    "sel_survey.png",
    "notifications.png",
    "wow_images.png",
    "wow.png",
    "youth.png",
    "survey.png",
    "resource_library.png",
    "resource_student.png",
    "your_journey.png",
    "afh.png",
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
          <h1 className="fw-bold mb-3 text-shadow-lg text-white h2">Clymb</h1>
          <p className="lead mb-4 opacity-75 fs-5">
            An innovative EdTech platform fostering socio-emotional growth in
            K-12 students through personalized learning and well-being
            resources.
          </p>
          <button className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold">
            Web & Mobile App Development
          </button>
        </div>
      </section>

      {/* ===== Project Overview ===== */}
      <section className="container py-5">
        <div className="vstack gap-4">
          <div className="row g-4 align-items-stretch">
            {/* Overview */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Project Overview</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <strong>Headquarters:</strong> Baltimore, Maryland, United
                    States
                  </li>
                  <li className="mb-2">
                    <strong>Industry:</strong> EdTech
                  </li>
                  <li className="mb-2">
                    <strong>Services:</strong> Web Development, Mobile App
                    Development, Web Design
                  </li>
                  <li>
                    <strong>User Personas:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {[
                        "Youth",
                        "Parent",
                        "Clymb Champions",
                        "Corporate",
                        "Organization",
                        "Large Organization",
                        "Clymb Admin",
                      ].map((role, i) => (
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

            {/* Client */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">The Client</h4>
                <p className="text-muted">
                  Clymb originated from a concern about the increasing stress
                  among youth. It aims to build resilience, empathy, and
                  responsible decision-making in K-12 students through engaging
                  digital experiences. The platform reflects a deep commitment
                  to emotional wellness and holistic learning.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies & About */}
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Technologies Used</h4>
                <ul className="list-unstyled small">
                  <li>
                    <span>Web Framework:</span> Java Spring Boot
                  </li>
                  <li>
                    <span>Frontend:</span> Angular
                  </li>
                  <li>
                    <span>Backend:</span> Java Spring Boot
                  </li>
                  <li>
                    <span>Database:</span> MS SQL
                  </li>
                  <li>
                    <span>Third Party Integration:</span> Clever, Twilio, Stripe
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">About The Project</h4>
                <p className="text-muted">
                  Clymb is an EdTech solution that provides personalized
                  learning paths based on CASEL's socio-emotional competencies.
                  The platform integrates Clever for onboarding, offers mental
                  wellness resources, and includes corporate well-being modules.
                  Its mission is to enhance youth’s socio-emotional intelligence
                  through technology-driven education.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Challenges</h4>
                <ul className="list-unstyled small">
                  <li>
                    Complex integration with Clever for data synchronization.
                  </li>
                  <li>
                    Maintaining compliance with recognized assessment standards.
                  </li>
                  <li>
                    Creating adaptive learning algorithms for personalization.
                  </li>
                  <li>
                    Ensuring accessibility and responsiveness across devices.
                  </li>
                  <li>
                    Developing corporate well-being modules alongside education
                    tools.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">Solutions</h4>
                <ul className="list-unstyled small">
                  <li>
                    Refactored the platform architecture for scalability and
                    data flow optimization.
                  </li>
                  <li>
                    Designed engaging visuals and adaptive UI for multiple grade
                    levels.
                  </li>
                  <li>
                    Created structured synchronization routines for Clever.
                  </li>
                  <li>
                    Implemented strict data security protocols for all modules.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Product Visuals ===== */}
      <section className="bg-light py-5">
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center text-primary mb-5">
            Product Visuals
          </h2>
          <div className="row g-4">
            {images.map((img, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card border-0 rounded-4 shadow overflow-hidden position-relative"
                  style={{ cursor: "pointer" }}>
                  <Image
                    src={`/images/Clymb/${img}`}
                    alt="Clymb Visual"
                    width={500}
                    height={300}
                    className="img-fluid w-100"
                    onClick={() => setSelectedImage(`/images/Clymb/${img}`)}
                    style={{ transition: "transform 0.5s ease" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fullscreen-modal d-flex justify-content-center align-items-center"
              onClick={() => setSelectedImage(null)}>
              <div
                className="position-relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                  className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow"
                  onClick={() => setSelectedImage(null)}>
                  ✕
                </button>
                <Image
                  src={selectedImage}
                  alt="Fullscreen"
                  width={1000}
                  height={700}
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== Final Result ===== */}
      <section className="py-5 text-center bg-white" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">The Result</h2>
          <p className="text-muted fs-5">
            Empowered over <strong>500K+</strong> students globally and improved
            SEL engagement by <strong>60%</strong>.
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

export default Clymb;
