"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Clymb = () => {
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
            Clymb
          </h1>
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
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                p className="text-muted"
              </h4>
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
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">
                The Client
              </h4>
              <p className="text-muted">
                Clymb stems from a deep concern for the increasing stress young
                people face. They witnessed this stress manifesting as rage,
                misbehavior, and anxiety. Driven to enhance resilience, foster
                responsible decision-making, grow empathy, and reduce stress
                among young individuals, they established Infinite Focus
                Schools, now known as Clymb. The platform reflects this
                dedication, providing a supportive environment for K-12 students
                to navigate socio-emotional challenges and build essential life
                skills.
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
                  <span>Web Framework</span>
                  <span>Java Spring Boot</span>
                </li>
                <li className="mb-2">
                  <span>Frontend</span>
                  <span>Angular</span>
                </li>
                <li className="mb-2">
                  <span>Backend</span>
                  <span>Java Spring Boot</span>
                </li>
                <li className="mb-2">
                  <span>Database</span>
                  <span>MSSQL</span>
                </li>
                <li className="mb-2">
                  <span>Third Party Integration</span>
                  <span>Clever, Twilio, Stripe</span>
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
                Clymb is an innovative EdTech platform designed to address the
                growing stress and mental health challenges young people face.
                It offers personalized learning plans based on CASEL's
                socio-emotional competencies. Clymb integrates with Clever for
                streamlined onboarding and provides resources to enhance
                emotional wellness. Clymb's mission is to support youth's
                socio-emotional development through a comprehensive digital
                solution that includes various interactive and AI-driven
                features. The platform also offers corporate modules for
                employee well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*===== Challenges & Solutions =====*/}
      <section className="container py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-md-6" data-aos="fade-right">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white bg-opacity-75 backdrop-blur">
              <h4 className="fw-bold text-primary mb-3 display-6">
                Challenges
              </h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  The integration with Clever was a bit complicated and required
                  several changes in the platform to comply with the data
                  received from Clever.
                  <br />
                </li>
                <li className="mb-2">
                  The assessments provided by Clymb are industry-recognized and
                  require adherence to specific standards.
                  <br />
                </li>
                <li className="mb-2">
                  The platform delivers personalized learning plans based on
                  CASEL's socio-emotional competencies, requiring complex
                  algorithms and data analysis.
                  <br />
                </li>
                <li className="mb-2">
                  The platform needed to be accessible on any device, which
                  required careful consideration of user experience and
                  interface design.
                  <br />
                </li>
                <li className="mb-2">
                  The platform needed corporate modules for companies to tie up
                  with Clymb, which required additional development and testing.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <div className="card border-0 shadow-lg rounded-4 h-100 p-4 bg-white">
              <h4 className="fw-bold text-primary mb-3 display-6">Solutions</h4>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  Conducted a thorough examination of the existing codebase and
                  implemented necessary adjustments to align it with Clymb's
                  objectives.
                  <br />
                </li>
                <li className="mb-2">
                  Crafted visually engaging and age-appropriate graphics to
                  resonate with the youth audience.
                  <br />
                </li>
                <li className="mb-2">
                  Developed a flexible interface that adapts to different grade
                  levels, offering a personalized experience for each user.
                  <br />
                </li>
                <li className="mb-2">
                  Implemented a well-planned schedule for synchronization with
                  Clever to maintain data accuracy and timeliness.
                  <br />
                </li>
                <li className="mb-2">
                  Enforced stringent data security protocols to safeguard
                  sensitive information and user transactions effectively.
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*======= Main Features ======*/}
      <section
        className="py-5 position-relative"
        style={{ background: "#f4f7ff" }}>
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold h1 text-center text-primary mb-5">
            Main Features 🚀
          </h2>
          <ul className="list-unstyled small">
            <li className="mb-2">
              <h4 className="h2">Compass Dashboard</h4>
              <p className="text-muted">
                Students can express their socio-emotional well-being and
                recieve personalized content.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Wall Of Wonder</h4>
              <p className="text-muted">
                A feed of students to share their thoughts, contents, images and
                achivements.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Resource Library</h4>
              <p className="text-muted">
                A digital library with articles and videos to improve social and
                emotional well-being.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Journal</h4>
              <p className="text-muted">
                A digital diary for student to note daily thoughts and
                moods,sharable with champions and parents.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Badges And Streaks</h4>
              <p className="text-muted">
                Encouragements through badges and streaks for completed
                activities.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Feedback Survey</h4>
              <p className="text-muted">
                Surveys to gather user experience and feature feedback.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">SEL Assessment</h4>
              <p className="text-muted">
                Monthly surveys to measure social and emotional learning skills.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Youth's Journey</h4>
              <p className="text-muted">
                A log of activities accessible from dashboard.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Data Dashboard For Master Admin</h4>
              <p className="text-muted">
                Monitoring platform using and managing accounts.
              </p>
            </li>
            <li className="mb-2">
              <h4 className="h2">Ai-based Recommendation</h4>
              <p className="text-muted">
                Predictive resource suggestions based on user inputs.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section
        className="py-3 position-relative"
        style={{ background: "#f4f7ff" }}>
        {/* <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center text-primary mb-2">Overview</h2>
          <p className="text-muted">
            The compass dashboard provides users with a clear orientation to
            Clymb's features and resources. Users can quickly assess
            self-awareness and navigate appreciation stations.{" "}
          </p>
        </div> */}
        <div className="container" data-aos="fade-up">
          <h2 className="fw-bold text-center text-primary mb-5">
            Project Highlights ✨
          </h2>
          <div className="row g-4">
            {[
              "Self-Awareness through Assessments",
              "Corporate Modules for Company Collaboration",
              "Clever Integration for Streamlined Onboarding",
              "Recognized Industry Assessments for Emotional Wellness",
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
            Product Visuals 🖼️
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
          <h2 className="fw-bold text-success mb-3">The Result 🌟</h2>
          <p className="text-muted fs-5">
            <span>500K+</span> &nbsp;
            <span>Funding</span>
            <br />
            <span>60%</span> &nbsp;
            <span>Improved SEL among students</span>
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

export default Clymb;
