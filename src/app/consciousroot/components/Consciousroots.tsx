"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Consciousroots: React.FC = () => {
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
    "ecommerce_home.png",
    "products_page.png",
    "admin_screenshot.png",
    "vendor_dashboard.png",
    "shopkeeper_dashboard.png",
  ];

  return (
    <div className="jsx-cba7fe618a914e69 bg-light text-dark">
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
          <h1 className="display-4 fw-bold mb-3 text-shadow-lg text-white">
            Consciousroot
          </h1>
          <p className="lead mb-4 opacity-75 fs-5">
            Empowering digital commerce through innovation, scalability, and
            seamless user experiences.
          </p>
          <button className="btn btn-light px-4 py-2 rounded-pill shadow-sm fw-semibold">
            Web & Mobile App Development
          </button>
        </div>
      </section>

      {/* ===== Project Overview ===== */}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          {/* Overview */}
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
                  <strong>Industry:</strong> E-commerce
                </li>
                <li className="mb-2">
                  <strong>Services:</strong> Web & App Development, UI/UX Design
                </li>
                <li>
                  <strong>User Personas:</strong>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {[
                      "End User",
                      "Admin",
                      "Affiliate",
                      "Vendor",
                      "Shopkeeper",
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
              <h4 className="fw-bold text-primary mb-3 display-6">
                The Client
              </h4>
              <p className="text-muted">
                Consciousroot is a unified e-commerce ecosystem offering
                convenience, scalability, and cross-platform accessibility. It
                bridges the gap between customers, vendors, and admins with
                real-time operations, analytics, and sleek UI.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Technologies Used
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <span>Web Framework: </span>
                  <span>Next.js, Django</span>
                </li>
                <li className="mb-2">
                  <span>Frontend: </span>
                  <span>React.js, Material UI</span>
                </li>
                <li className="mb-2">
                  <span>Backend: </span>
                  <span>Django</span>
                </li>
                <li className="mb-2">
                  <span>Database: </span>
                  <span>MSSQL</span>
                </li>
                <li className="mb-2">
                  <span>Third Party Integration: </span>
                  <span>Stripe</span>
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
                Consciousroot is a comprehensive e-commerce platform designed to
                streamline online shopping for various user personas including
                end users, admins, affiliates, vendors, and shopkeepers. The
                platform offers a seamless shopping experience with features
                like product browsing, secure payments, order tracking, and
                personalized recommendations. Admins can efficiently manage
                products, orders, and users through a dedicated dashboard, while
                vendors and shopkeepers have specialized portals to handle their
                operations. Consciousroot aims to create a unified ecosystem
                that enhances user engagement and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          {/* Challenges */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Challenges
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Designing an intuitive user interface for diverse user
                  personas.
                  <br />
                </li>
                <li className="mb-2">
                  Ensuring secure payment processing.
                  <br />
                </li>
                <li className="mb-2">
                  Managing inventory and sales efficiently.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          {/* Solutions */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">Solutions</h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Conducted user research to understand needs and preferences,
                  leading to a user-centric design approach that enhanced
                  usability for all personas.
                </li>
                <li className="mb-2">
                  Integrated Stripe, a trusted payment gateway, to provide
                  secure and seamless transactions for users.
                </li>
                <li className="mb-2">
                  Developed an admin dashboard that allows real-time tracking of
                  inventory levels and sales data, streamlining operations.
                </li>
              </ul>
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
          <ul className="list-unstyled small">
            <li className="mb-4">
              <h4 className="h2">Ecommerce</h4>
              <p>
                Consumers can easily order and return their products. Consumer
                can add Product in wishlist so that he/she can purchase it
                later. Consumer can choose their own payment mode. Consumer can
                see recommendations based on previous purchase.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Admin Panel</h4>
              <p>
                Admin can manage products, categories, orders, users, and view
                sales reports. Admin can add offers and discounts to boost
                sales.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Affiliate System</h4>
              <p>
                Affiliates can promote products and earn commissions on sales
                generated through their referral links.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Vendor Management</h4>
              <p>
                Vendors can manage their product listings, track orders, and
                view sales performance through a dedicated vendor dashboard.
              </p>
            </li>
            <li className="mb-4">
              <h4 className="h2">Shopkeeper Portal</h4>
              <p>
                Shopkeepers can manage stocks, process orders, and access sales
                data through a specialized portal.
              </p>
            </li>
          </ul>
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
              "Custom E-commerce Platform",
              "Responsive Web Design",
              "Advanced Filtering",
              "Secure Payment Integration",
              "User Account Management",
              "Order Tracking System",
              "Admin Dashboard",
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
                      src={`/images/consciousroot/${img}`}
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
                          setSelectedImage(`/images/consciousroot/${img}`)
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
      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  );
};

export default Consciousroots;
