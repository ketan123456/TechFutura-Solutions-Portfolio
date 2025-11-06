"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Gotu = () => {
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
            GOTU
          </h1>
          <p className="lead mb-4 opacity-75 fs-5">
            An on-demand service platform connecting customers with local
            vendors for household and personal services.
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
                  <strong>Headquarters:</strong> India
                </li>
                <li className="mb-2">
                  <strong>Industry:</strong> On-Demand Services / Local
                  Marketplace
                </li>
                <li className="mb-2">
                  <strong>Services:</strong>Full Stack Development, API Design,
                  Payment Integration, UX Optimization
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
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">
                The Client
              </h4>
              <p className="text-muted">
                GOTU is an on-demand service platform that bridges the gap
                between customers and local vendors. It enables users to book
                verified professionals for various household and personal
                services — such as kitchen cleaning, pet care, baby sitting, and
                house maintenance. The platform ensures convenience, trust, and
                transparency for both vendors and customers through real-time
                booking and secure payments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*=======Technologies Used and About the project======*/}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Technologies Used
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <span>Backend</span>
                  <span>Node.js, Express.js, MySQL, Knex.js</span>
                </li>
                <li className="mb-2">
                  <span>Frontend</span>
                  <span>React.js, Tailwind CSS</span>
                </li>
                <li className="mb-2">
                  <span>Payment Gateway</span>
                  <span>
                    Stripe Connect (Split Payments & Authorization Flow)
                  </span>
                </li>
                <li className="mb-2">
                  <span>Version Control / Deployment</span>
                  <span>Git, GitHub, Vercel / AWS</span>
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
                The GOTU platform was designed to simplify local service booking
                by providing a seamless interface for both customers and
                vendors. With its modern tech stack and reusable component
                structure, the app ensures performance, scalability, and
                flexibility for managing diverse service categories and complex
                time-based vendor availability.
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
                  Displaying bookings and appointments in a clear, intuitive
                  manner.
                </li>
                <li className="mb-2">
                  Managing vendor availability and scheduling configurations
                  dynamically.
                </li>
                <li className="mb-2">
                  Integrating Stripe for payment authorization without premature
                  deductions.
                </li>
                <li className="mb-2">
                  Creating a reusable and maintainable UI component structure.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">Solutions</h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Designed a clean calendar and appointment interface that
                  visualizes real-time vendor availability and customer
                  bookings.
                </li>
                <li className="mb-2">
                  Implemented a robust time-configuration system enabling
                  vendors to manage their working hours and availability slots
                  easily.
                </li>
                <li className="mb-2">
                  Integrated Stripe Connect with an authorization flow —
                  ensuring the customer’s amount is authorized at booking and
                  charged only after successful service completion.
                </li>
                <li className="mb-2">
                  Developed reusable React components and service hooks to
                  streamline feature scalability and improve development
                  efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*==== Main Features ====*/}
      <section
        className="py-5 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          <h4 className="fw-bold h1 text-center text-primary mb-5">
            Main Features
          </h4>
          <ul className="list-unstyled small">
            <li className="mb-4">
              <h4 className="h2">Vendor Availability Management</h4>
              <p className="text-muted">
                Vendors can configure their time slots, manage availability, and
                receive bookings based on real-time schedules.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Smart Booking System</h4>
              <p className="text-muted">
                Customers can search, view vendor profiles, and book services
                instantly based on live availability and proximity.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Stripe Authorization Flow</h4>
              <p className="text-muted">
                Payments are authorized during booking and only captured once
                the service is marked complete — ensuring trust and fairness on
                both sides.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Reusable UI Components</h4>
              <p className="text-muted">
                ensure consistency, scalability, and maintainability.
              </p>
            </li>
            <li className="mb-4">
              <h4>Admin Dashboard</h4>
              <p className="text-muted">
                Provides full control over vendors, bookings, and transactions,
                helping administrators maintain service quality and platform
                integrity.
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
              GOTU offers an intuitive user interface connecting customers and
              vendors in real-time, ensuring smooth booking, communication, and
              payment experiences.{" "}
            </p>
          </div> */}
          <h2 className="fw-bold text-center text-primary mb-5">
            Project Highlights 
          </h2>
          <div className="row g-4">
            {[
              "Connects users with local vendors based on real-time availability.",
              "Provides a transparent booking and payment flow.",
              "Allows vendors to manage their service schedules and earnings.",
              "Ensures secure transactions using Stripe Connect integration.",
              "Offers reusable components and scalable architecture for future growth.",
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
                      src={`/images/gotu/${img}`}
                      alt="Clymb Visual"
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
          <h2  className="fw-bold text-success mb-3">The Result</h2>
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

export default Gotu;
