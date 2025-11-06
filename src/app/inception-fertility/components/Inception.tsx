"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InceptionFertility: React.FC = () => {
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

  const images = [
    "Home.png",
    "successStory.png",
    "brands.png",
    "buttercms_admin.png",
    "cookies.png",
  ];

  return (
    <div className="jsx-inceptionfertility bg-light text-dark">
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
          <h1 className="fw-bold mb-3 text-shadow-lg text-white h2">
            Inception Fertility
          </h1>
          <p className="lead mb-4 opacity-75 fs-5">
            Enhancing Fertility Journeys with Technology and Compassion
          </p>
          <button className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold">
            Web Application
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
                <h4 className="fw-bold text-primary mb-3 ">Project Overview</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <strong>Headquarters:</strong> United States
                  </li>
                  <li className="mb-2">
                    <strong>Industry:</strong> Healthcare / Fertility Tech
                  </li>
                  <li className="mb-2">
                    <strong>Services:</strong> Web Development, CMS Integration,
                    SEO Optimization, API Integration
                  </li>
                  <li>
                    <strong>User Personas:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {[
                        "Patients",
                        "Fertility Clinics",
                        "Medical Professionals",
                        "Administrators",
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
                <h4 className="fw-bold text-primary mb-3 ">The Client</h4>
                <p className="text-muted">
                  Inception Fertility is a tech-enabled company improving the
                  patient experience through an integrated ecosystem of
                  fertility brands. It provides science-backed fertility
                  solutions for individuals and couples, blending technology
                  with compassion to guide patients through every step of their
                  fertility journey.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies & About */}
          <div className="row g-4 align-items-stretch">
            {/* Technologies Used */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3 ">
                  Technologies Used
                </h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <span>UI Framework: </span>
                    <span>Nuxt.js</span>
                  </li>
                  <li className="mb-2">
                    <span>Frontend: </span>
                    <span>HTML, CSS, SCSS, JavaScript</span>
                  </li>
                  <li className="mb-2">
                    <span>Design Tool: </span>
                    <span>Figma</span>
                  </li>
                  <li className="mb-2">
                    <span>Third-Party Integration: </span>
                    <span>ButterCMS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* About The Project */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3 ">
                  About The Project
                </h4>
                <p className="text-muted">
                  The Inception Fertility platform was designed to provide an
                  informative, seamless digital experience for users seeking
                  fertility support. It focuses on SEO performance, API-driven
                  content delivery, and clear presentation of scientific data
                  while maintaining compliance with healthcare standards.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="row g-4 align-items-stretch">
            {/* Challenges */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3 ">Challenges</h4>
                <ul className="list-unstyled small">
                  <li>Integrating ButterCMS with SEO functionality.</li>
                  <li>Handling dynamic iframes and backend data rendering.</li>
                  <li>Displaying complex medical data accurately.</li>
                  <li>Seamless connectivity with partner clinic systems.</li>
                </ul>
              </div>
            </div>

            {/* Solutions */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3 ">Solutions</h4>
                <ul className="list-unstyled small">
                  <li>
                    Integrated ButterCMS to enable dynamic content management
                    and faster updates.
                  </li>
                  <li>
                    Created secure backend handling for iframe and embedded
                    data.
                  </li>
                  <li>
                    Structured scientific sections for accurate medical content.
                  </li>
                  <li>
                    Implemented secure API integrations for real-time
                    data-sharing with partner clinics.
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
                title: "Scientific Information Portal",
                text: "Offers categorized fertility and medical data with intelligent search for easy access to relevant information.",
              },
              {
                title: "CMS-Driven Content Management",
                text: "Empowers marketing teams to update pages via ButterCMS without developer involvement.",
              },
              {
                title: "Partner API Integration",
                text: "Securely connects with fertility clinics for real-time data synchronization.",
              },
              {
                title: "SEO Optimization",
                text: "Dynamic meta handling and schema structures for improved search visibility.",
              },
              {
                title: "Responsive UI/UX",
                text: "Delivers consistent, user-friendly experiences across all devices.",
              },
            ].map((feature, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                  <h4 className="fw-bold text-primary mb-3">{feature.title}</h4>
                  <p className="small mb-0">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Project Highlights ===== */}
      <section
        className="py-3 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center text-primary mb-5">
            Project Highlights
          </h2>
          <div className="row g-4">
            {[
              "Founded by a fertility patient, for fertility patients.",
              "Focus on patient experience across the treatment journey.",
              "Supports IVF, donor, and gestational carrier programs.",
              "Integrates multiple fertility brands under one platform.",
              "Driven by compassion, science, and innovation.",
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
                  <div className="image-wrapper position-relative">
                    <Image
                      src={`/images/inceptionfertility/${img}`}
                      alt="Inception Fertility Visual"
                      width={500}
                      height={300}
                      className="img-fluid w-100"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-light rounded-pill px-4 py-2 shadow"
                        onClick={() =>
                          setSelectedImage(`/images/inceptionfertility/${img}`)
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

      {/* ===== Result ===== */}
      <section className="py-5 text-center bg-white" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">The Result</h2>
          <p className="text-muted fs-5">
            A robust, scalable, and compassionate digital platform empowering
            fertility journeys with innovation and care.
          </p>
          <blockquote className="blockquote fst-italic text-primary mt-4">
            “They delivered excellence — seamless design, impactful performance,
            and a meaningful user experience.”
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

export default InceptionFertility;
