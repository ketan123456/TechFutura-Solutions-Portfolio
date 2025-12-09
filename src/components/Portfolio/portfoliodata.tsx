"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/routes";
import { AnimatedList } from "@/components/ui/animated-list";
import { PORTFOLIO_ITEMS } from "./portfolio.data";

export default function Portfoliodata() {
  const router = useRouter();

  const handleRoutes = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      {/* HERO */}
      <section
        className="text-white text-center py-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        }}>
        <div className="container position-relative py-5">
          <h1 className="h5 fw-bold text-white">
            Welcome to TechFutura Solutions
          </h1>
          <h3 className="h5 fw-bold text-white mt-3">Our Portfolio</h3>
        </div>
      </section>

      {/* LIST */}
      <div className="px-3">
        <AnimatedList className="vstack gap-3 mt-3 p-4 border rounded-5 shadow-lg card portfolio-card">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <li
              key={index}
              className="list-wrapper text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold
                flex-sm-row flex-column gap-3 justify-content-between 
                d-flex align-items-center">
              {item.title}

              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() =>
                  handleRoutes(ROUTES[item.route as keyof typeof ROUTES])
                }>
                View Case Study
              </button>
            </li>
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}
