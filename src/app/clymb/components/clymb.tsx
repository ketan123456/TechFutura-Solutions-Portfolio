"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Clymb: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ AOS Initialization for Next.js
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
                  <li className="mb-2">
                    <span>Web Framework: </span>
                    <span>Java Spring Boot</span>
                  </li>
                  <li className="mb-2">
                    <span>Frontend: </span>
                    <span>Angular</span>
                  </li>
                  <li className="mb-2">
                    <span>Backend: </span>
                    <span>Java Spring Boot</span>
                  </li>
                  <li className="mb-2">
                    <span>Database: </span>
                    <span>MS SQL</span>
                  </li>
                  <li className="mb-2">
                    <span>Third Party Integration: </span>
                    <span>Clever, Twilio, Stripe</span>
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
                  <li className="mb-2">
                    Complex integration with Clever for data synchronization.
                  </li>
                  <li className="mb-2">
                    Maintaining compliance with recognized assessment standards.
                  </li>
                  <li className="mb-2">
                    Creating adaptive learning algorithms for personalization.
                  </li>
                  <li className="mb-2">
                    Ensuring accessibility and responsiveness across devices.
                  </li>
                  <li className="mb-2">
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
                  <li className="mb-2">
                    Refactored the platform architecture for scalability and
                    data flow optimization.
                  </li>
                  <li className="mb-2">
                    Designed engaging visuals and adaptive UI for multiple grade
                    levels.
                  </li>
                  <li className="mb-2">
                    Created structured synchronization routines for Clever.
                  </li>
                  <li className="mb-2">
                    Implemented strict data security protocols for all modules.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*==== Main Features ========= */}
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
                title: "Compass Dashboard",
                desc: "Students express their emotional state and receive tailored content.",
              },
              {
                title: "Wall Of Wonder",
                desc: "Interactive feed for sharing achievements, thoughts, and media.",
              },
              {
                title: "Resource Library",
                desc: "A digital hub of videos and articles promoting well-being.",
              },
              {
                title: "Journal",
                desc: "A reflective diary for students to track emotions and growth.",
              },
              {
                title: "Badges & Streaks",
                desc: "Motivational gamified elements that reward participation.",
              },
              {
                title: "Feedback Survey",
                desc: "Collects feedback and user insights to improve experiences.",
              },
              {
                title: "SEL Assessment",
                desc: "Evaluates socio-emotional learning through monthly surveys.",
              },
              {
                title: "Youth’s Journey",
                desc: "Tracks learning activities and milestones.",
              },
              {
                title: "AI-Based Recommendation",
                desc: "Smart suggestions powered by user interaction data.",
              },
            ].map((feature, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
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
              "Clever Integration for School Onboarding",
              "AI-driven Personalized Learning",
              "Corporate Wellness Modules",
              "CASEL-aligned Emotional Learning Framework",
            ].map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div
                  className="card border-0 h-100 shadow-lg rounded-4 text-center p-4"
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

      {/* ===== Product Visuals with Modal ===== */}
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
                  <div className="image-wrapper position-relative">
                    <Image
                      src={`/images/Clymb/${img}`}
                      alt="Clymb Visual"
                      width={500}
                      height={300}
                      className="img-fluid w-100"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-light rounded-pill px-4 py-2 shadow"
                        onClick={() =>
                          setSelectedImage(`/images/Clymb/${img}`)
                        }>
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fullscreen Modal */}
          {selectedImage && (
            <div
              className="fullscreen-modal d-flex justify-content-center align-items-center"
              onClick={() => setSelectedImage(null)}>
              <div
                className="position-relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                  className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow"
                  style={{ zIndex: 10 }}
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
