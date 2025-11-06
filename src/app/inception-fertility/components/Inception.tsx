"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const InceptionFertility = () => {
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

      // Use RAF to handle delayed hydration after refresh
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
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">
                The Client
              </h4>
              <p className="text-muted">
                Inception Fertility is a tech-enabled company improving patient
                experience through an integrated ecosystem of fertility brands.
                It provides expert-formulated fertility support for both women
                and men, combining flexibility and effectiveness to suit diverse
                lifestyles. The company focuses on delivering science-backed
                solutions that guide individuals and couples through every stage
                of their fertility journey with compassion and care.
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
                  <span>UI Framework</span>
                  <span>Nuxt.js</span>
                </li>
                <li className="mb-2">
                  <span>Frontend</span>
                  <span>HTML, CSS, SCSS, JavaScript</span>
                </li>
                <li className="mb-2">
                  <span>Design Tool</span>
                  <span>Figma</span>
                </li>
                <li className="mb-2">
                  <span>Third-Party Integration</span>
                  <span>ButterCMS</span>
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
                The Inception Fertility platform was built to deliver an
                engaging and informative digital experience for users seeking
                fertility-related support and guidance. With a focus on
                performance, SEO, and medical data accuracy, the website
                provides scientific information in a user-friendly and
                transparent manner while ensuring seamless integration with
                partner clinics and APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*======== Challenges & Solutions ==========*/}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Challenges
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Implementing ButterCMS while managing backend operations and
                  SEO functionalities.
                </li>
                <li className="mb-2">
                  Handling dynamic iframes and data fetched from the backend.
                </li>
                <li className="mb-2">
                  Presenting complex medical data clearly and accurately for
                  users.
                </li>
                <li className="mb-2">
                  Connecting seamlessly with partner platforms and fertility
                  clinic systems.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3display-6 display-6">
                Solutions
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Integrated ButterCMS efficiently to manage dynamic content,
                  enabling flexible page updates without developer dependency.
                </li>
                <li className="mb-2">
                  Built a secure backend structure that handled iframe
                  management and ensured smooth rendering of embedded data.
                </li>
                <li className="mb-2">
                  Created a structured scientific section with categorized
                  medical content and an intelligent search function for easy
                  navigation.
                </li>
                <li className="mb-2">
                  Implemented secure APIs and encrypted data exchange protocols
                  for safe integration with third-party platforms and partner
                  systems.
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
          <h2 className="fw-bold h1 text-center text-primary mb-5 display-6">
            Main Features
          </h2>
          <ul className="list-unstyled small">
            <li className="mb-4">
              <h4 className="h2">Scientific Information Portal</h4>
              <p className="text-muted">
                Offers categorized medical and fertility data with a robust
                search system allowing users to access accurate and relevant
                information quickly.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">CMS-Driven Content Management</h4>
              <p className="text-muted">
                Integrated ButterCMS to empower marketing teams to update
                content seamlessly while maintaining brand consistency and SEO
                standards.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Partner API Integration</h4>
              <p className="text-muted">
                Established secure API connections for fertility clinics and
                partners, enabling real-time data sharing and process
                synchronization.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">SEO Optimization</h4>
              <p className="text-muted">
                Implemented dynamic meta handling, schema structures, and
                performance tuning to achieve higher visibility and better
                organic reach.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Responsive UI/UX</h4>
              <p className="text-muted">
                Built a highly responsive, visually appealing interface
                optimized for desktop and mobile experiences, enhancing
                accessibility for users across demographics.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Highlights ===== */}
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
              "Founded by a fertility patient, for fertility patients.",
              "Focus on improving patient experience throughout the treatment journey.",
              "Supports IVF treatments, donor programs, and gestational carrier partnerships.",
              "Offers premium fertility brands under one ecosystem.",
              "Driven by compassion, science, and customer-centric care.",
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
                      src={`/images/inceptionfertility/${img}`}
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

      {/* ===== Final Result ===== */}
      <section className="py-5 text-center bg-white" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold text-success mb-3">The Result</h2>
          <p className=" fs-5">
            A sleek, scalable, and user-focused e-commerce platform uniting
            diverse personas through one intuitive system.
          </p>
          <blockquote className="blockquote fst-italic text-primary mt-4">
            “They delivered excellence — clean design, flawless experience, and
            outstanding performance.”
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
