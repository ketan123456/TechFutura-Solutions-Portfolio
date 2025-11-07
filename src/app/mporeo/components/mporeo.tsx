"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Mporeo = () => {
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
 

  const images = ["mporeo1.jpeg", "mporeo4.jpeg", "mporeo3.jpeg", "mporeo2.jpeg", "mporeo5.png"];
  return (
    <div className="jsx-cba7fe618a914e69 bg-light text-dark">
      {/* ===== Hero Section ===== */}
      <section
        className="text-white text-center py-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%)",
          }}
        />
        <div className="container position-relative py-5" data-aos="fade-up">
          <h1 className=" fw-bold mb-3 text-shadow-lg text-white h2">Mporeo</h1>
          <p className="lead mb-4 opacity-75 fs-5">
            The revolutionary Food-Tech that is transforming your dining experience. Happy You
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
                <h4 className="fw-bold text-primary mb-3 ">Project Overview</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <strong>Headquarters:</strong> United States
                  </li>
                  <li className="mb-2">
                    <strong>Industry:</strong> Restaurant Based Online Service
                  </li>
                  <li className="mb-2">
                    <strong>Services:</strong> Web & App Development, UI/UX
                    Design
                  </li>
                  <li>
                    <strong>User Personas:</strong>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {["End User", "Admin", "Restaurant", "Driver"].map(
                        (role, i) => (
                          <span
                            key={i}
                            className="badge rounded-pill px-3 py-2 shadow-sm"
                            style={{
                              background:
                                "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                            }}
                          >
                            {role}
                          </span>
                        )
                      )}
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
                  Mporeo is a digital-first food delivery platform designed to
                  bridge the gap between local restaurants and customers through
                  a seamless online ordering experience. The client’s goal was
                  to create an intuitive web and mobile solution where users can
                  browse nearby restaurants, place real-time orders, and track
                  deliveries with ease. Mporeo focuses on scalability, speed,
                  and user-centric design for both customers and vendors.mins
                  with real-time operations, analytics, and sleek UI.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-stretch">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3 ">
                  Technologies Used
                </h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    <span>Web Framework: </span>
                    <span>HTML, CSS, Bootstrap, PHP</span>
                  </li>
                  <li className="mb-2">
                    <span>Backend: </span>
                    <span>PHP CodeIgniter(V3)</span>
                  </li>
                  <li className="mb-2">
                    <span>Database: </span>
                    <span>MSSQL</span>
                  </li>
                  <li className="mb-2">
                    <span>Mobile Applications: </span>
                    <span>React Native</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3 ">
                  About The Project
                </h4>
                <p className="text-muted">
                  Mporeo is an end-to-end online restaurant service platform
                  designed to simplify food ordering and delivery for both
                  customers and restaurant owners. The system provides real-time
                  order updates, secure payments, and GPS-enabled delivery
                  tracking. Restaurants can onboard easily, upload menus, manage
                  inventory, and receive live order notifications, while
                  customers can browse, filter, and order from a variety of
                  cuisines. The platform includes three core applications —
                  Customer App, Restaurant Dashboard, and Delivery Partner App —
                  all connected through a powerful Admin Panel that ensures
                  smooth coordination and performance monitoring.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-stretch">
            {/* Challenges */}
            <div className="col-md-6" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3 ">Challenges</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    Designing an efficient system architecture that supports
                    real-time order updates across customers, restaurants, and
                    delivery agents simultaneously.
                  </li>
                  <li className="mb-2">
                    Implementing accurate GPS-based tracking for delivery agents
                    with live map updates and minimal latency.
                  </li>
                  <li className="mb-2">
                    Creating a unified admin dashboard to manage restaurants,
                    users, and delivery operations from a single platform.
                  </li>
                  <li className="mb-2">
                    Managing dynamic menu updates and high traffic during peak
                    ordering hours without affecting system performance.
                  </li>
                  <li className="mb-2">
                    Ensuring secure and seamless online payments for multiple
                    stakeholders (customers, restaurants, and drivers).
                  </li>
                </ul>
              </div>
            </div>
            {/* Solutions */}
            <div className="col-md-6" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3 ">Solutions</h4>
                <ul className="list-unstyled small">
                  <li className="mb-2">
                    Developed a scalable architecture using{" "}
                    <strong>PHP</strong> and 
                    <strong>&nbsp; Mysql</strong> with optimized APIs to support
                    simultaneous real-time updates via{" "}
                    <strong>WebSockets</strong>.
                  </li>
                  <li className="mb-2">
                    Integrated <strong>Google Maps API</strong> for live
                    delivery tracking and dynamic route optimization, enhancing
                    delivery accuracy.
                  </li>
                  <li className="mb-2">
                    Built a role-based <strong>Admin Panel</strong> for managing
                    users, orders, commissions, and restaurant performance
                    analytics.
                  </li>
                  <li className="mb-2">
                    Used <strong>React Native</strong> for mobile apps to ensure
                    consistent UI/UX across Android and iOS with efficient state
                    management.
                  </li>
                  <li className="mb-2">
                    Integrated <strong>Razorpay</strong> for secure payment
                    handling and implemented wallet and referral modules to
                    improve customer engagement.
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
        style={{ background: "#f4f7ff" }}
      >
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold h1 text-center text-primary mb-5">
            Main Features
          </h2>
          <div className="row g-4 align-items-stretch">
            {/* Ecommerce */}
            <div className="col-md-6 col-lg-4" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">
                  Customer Application
                </h4>
                <p className="small mb-0">
                  Customers can browse restaurants, view menus, place food
                  orders, make secure payments, and track their deliveries in
                  real time.
                </p>
              </div>
            </div>

            {/* Restaurant Dashboard */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">
                  Restaurant Dashboard
                </h4>
                <p className="small mb-0">
                  Restaurant partners can manage menus, prices, offers, and
                  incoming orders, while tracking performance analytics from a
                  centralized dashboard.
                </p>
              </div>
            </div>

            {/* Delivery Partner App */}
            <div className="col-md-6 col-lg-4" data-aos="fade-left">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">
                  Delivery Partner App
                </h4>
                <p className="small mb-0">
                  Delivery agents can accept or reject orders, view optimized
                  routes, update status in real-time, and receive payment
                  summaries through their dedicated app.
                </p>
              </div>
            </div>

            {/* Admin Panel */}
            <div className="col-md-6 col-lg-4" data-aos="fade-right">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
                <h4 className="fw-bold text-primary mb-3">Admin Panel</h4>
                <p className="small mb-0">
                  The admin can manage users, restaurants, orders, commissions,
                  and payment settlements, ensuring smooth operations and
                  service efficiency.
                </p>
              </div>
            </div>

            {/* Offers & Loyalty */}
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
                <h4 className="fw-bold text-primary mb-3">Offers & Loyalty</h4>
                <p className="small mb-0">
                  Customers can enjoy discounts, loyalty points, and promo
                  codes, enhancing engagement and retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Highlights ===== */}
      <section
        className="py-3 position-relative"
        style={{ background: "#f4f7ff" }}
      >
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center text-primary mb-5">
            Project Highlights
          </h2>
          <div className="row g-4">
            {[
              "Successfully developed a scalable multi-role food delivery platform.",
              "Reduced average delivery time by 25% using real-time tracking.",
              "Enhanced restaurant sales visibility with analytics-driven dashboard.",
              "Seamless experience across Web and Mobile (React Native).",
              "Increased customer engagement through personalized offers.",
              "Improved system performance using optimized APIs and caching.",
              "End-to-end automation of order and delivery management.",
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
                  }}
                >
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
                  style={{ cursor: "pointer" }}
                >
                  <div className="image-wrapper position-relative">
                    <Image
                      src={`/images/Mporeo/${img}`}
                      alt="Consciousroot Visual"
                      width={500}
                      height={300}
                      className="img-fluid w-100"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-light rounded-pill px-4 py-2 shadow"
                        onClick={() =>
                          setSelectedImage(`/images/Mporeo/${img}`)
                        }
                      >
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
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="position-relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow"
                  style={{ zIndex: 10 }}
                  onClick={() => setSelectedImage(null)}
                >
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
            A sleek, scalable, and user-focused e-commerce platform uniting
            diverse personas through one intuitive system.
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

export default Mporeo;
