"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { div } from "motion/react-client";

const Gotu: React.FC = () => {
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

      // Handle delayed hydration refresh
      const timer = requestAnimationFrame(() => {
        AOS.refreshHard();
      });
      return () => cancelAnimationFrame(timer);
    }
  }, []);

  const images = [
    "Homepage.png",
    "vendor-dashboard.png",
    "customer-dashboard.png",
    "vendor-booking.png",
    "customer-booking.png",
    "stripe.png",
    "admin-panel.png",
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
          <h1 className="fw-bold mb-3 text-shadow-lg text-white h2">GOTU</h1>
          <p className="lead mb-4 opacity-75 fs-5">
            An on-demand service platform connecting customers with local
            vendors for household and personal services.
          </p>
          <button className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold">
            Service Based Web Platform
          </button>
        </div>
      </section>

      {/* ===== Project Overview ===== */}
      <section className="container py-5">
        <div className="vstack gap-4">
          {/* Overview + Client */}
          <div className="row g-4 align-items-stretch">
            {/* Project Overview */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Project Overview</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <strong>Headquarters:</strong> India
                  </li>
                  <li className="mb-2">
                    <strong>Industry:</strong> On-Demand Services / Local
                    Marketplace
                  </li>
                  <li className="mb-2">
                    <strong>Services:</strong> Full Stack Development, API
                    Design, Payment Integration, UX Optimization
                  </li>
                  <li>
                    <strong>User Personas:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {[
                        "Customers",
                        "Vendors / Service Providers",
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

            {/* The Client */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">The Client</h4>
                <p className="text-muted">
                  GOTU is an on-demand service platform that bridges the gap
                  between customers and local vendors. It enables users to book
                  verified professionals for household and personal services
                  such as kitchen cleaning, pet care, babysitting, and house
                  maintenance. The platform ensures convenience, trust, and
                  transparency through real-time booking and secure payments.
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Used + About */}
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Technologies Used</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <span>Backend: </span>Node.js, Express.js, MySQL, Knex.js
                  </li>
                  <li className="mb-2">
                    <span>Frontend: </span>React.js, Tailwind CSS
                  </li>
                  <li className="mb-2">
                    <span>Payment Gateway: </span>
                    Stripe Connect (Split Payments & Authorization Flow)
                  </li>
                  <li className="mb-2">
                    <span>Version Control / Deployment: </span>
                    Git, GitHub, Vercel / AWS
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">About The Project</h4>
                <p className="text-muted">
                  The GOTU platform simplifies local service booking by
                  providing a seamless interface for both customers and vendors.
                  With its modern tech stack and reusable component structure,
                  the app ensures performance, scalability, and flexibility for
                  managing service categories and vendor availability.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges + Solutions */}
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Challenges</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    Displaying bookings and appointments in an intuitive way.
                  </li>
                  <li className="mb-2">
                    Managing vendor availability and scheduling dynamically.
                  </li>
                  <li className="mb-2">
                    Integrating Stripe for secure payment authorization.
                  </li>
                  <li className="mb-2">
                    Creating a reusable and maintainable UI component structure.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">Solutions</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    Designed a calendar interface that visualizes real-time
                    vendor availability and customer bookings.
                  </li>
                  <li className="mb-2">
                    Implemented a dynamic time-configuration system for vendors.
                  </li>
                  <li className="mb-2">
                    Integrated Stripe Connect authorization — charging only
                    after service completion.
                  </li>
                  <li className="mb-2">
                    Built reusable React components and service hooks for faster
                    feature scalability.
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
                title: "Vendor Availability Management",
                desc: "Vendors can configure their time slots, manage availability, and receive bookings in real-time.",
              },
              {
                title: "Smart Booking System",
                desc: "Customers can search, view vendor profiles, and book services instantly based on live availability.",
              },
              {
                title: "Stripe Authorization Flow",
                desc: "Payments are authorized during booking and captured only after completion for secure transactions.",
              },
              {
                title: "Reusable UI Components",
                desc: "Ensures consistency, scalability, and maintainability.",
              },
              {
                title: "Admin Dashboard",
                desc: "Full control over vendors, bookings, and transactions for platform transparency.",
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
              "Connects users with local vendors based on real-time availability.",
              "Provides transparent booking and payment flows.",
              "Allows vendors to manage service schedules and earnings.",
              "Ensures secure transactions using Stripe Connect.",
              "Offers reusable components and scalable architecture.",
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
                      src={`/images/gotu/${img}`}
                      alt="Gotu Visual"
                      width={500}
                      height={300}
                      className="img-fluid w-100"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-light rounded-pill px-4 py-2 shadow"
                        onClick={() => setSelectedImage(`/images/gotu/${img}`)}>
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
            A sleek, scalable, and user-focused service platform connecting
            customers and local vendors through one intuitive system.
          </p>
          <blockquote className="blockquote fst-italic text-primary mt-4">
            “They delivered excellence — clean design, flawless experience, and
            outstanding performance.”
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Gotu;
