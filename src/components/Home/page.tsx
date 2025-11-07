"use client";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/routes";
import { AnimatedList } from "@/components/ui/animated-list";

const HomeComponent = () => {
  const router = useRouter();
  const handleRoutes = (path: string) => {
    router.push(path);
  };
  return (
    <div>
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
        <div className="container position-relative py-5">
          <h1 className="h5 mb-2 text-center fw-bold mb-6  text-white">
            Welcome to TechFutura Solutions
          </h1>
          {/* <h2 className="h6 mb-2 text-white fw-bold mb-3 text-shadow-lg">
            TechFutura Solutions
          </h2> */}
          <h3 className="h5 fw-bold  text-white mb-3">Our Portfolio</h3>
        </div>
      </section>
      <div className="px-3">
        <ul className="vstack gap-3 mt-10  justify-content-center p-4 border rounded-5 shadow-lg card portfolio-card">
          <AnimatedList className="vstack w-100 gap-3 " delay={500}>
           <li className="text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold flex-sm-row flex-column gap-3 justify-content-between m-0 d-flex align-items-center">
              Mporeo
              {/* <p>
                    <Image src="/consciousroot.png" alt="Consciousroot Logo" width={100} height={100} />
                </p> */}
              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() => handleRoutes(ROUTES.MPOREO)}>
                View Case Study
              </button>
            </li>
            <li className="text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold flex-sm-row flex-column gap-3 justify-content-between m-0 d-flex align-items-center">
              GOTU
              {/* <p>
                    <Image src="/consciousroot.png" alt="Consciousroot Logo" width={100} height={100} />
                </p> */}
              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() => handleRoutes(ROUTES.GOTU)}>
                View Case Study
              </button>
            </li>
            <li className="text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold flex-sm-row flex-column gap-3 justify-content-between m-0 d-flex align-items-center">
              Revjump
              {/* <p>
                    <Image src="/consciousroot.png" alt="Consciousroot Logo" width={100} height={100} />
                </p> */}
              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() => handleRoutes(ROUTES.REVJUMP)}>
                View Case Study
              </button>
            </li>
            <li className="text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold flex-sm-row flex-column gap-3 justify-content-between m-0 d-flex align-items-center">
              Inception Fertility
              {/* <p>
                    <Image src="/consciousroot.png" alt="Consciousroot Logo" width={100} height={100} />
                </p> */}
              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() => handleRoutes(ROUTES.INCEPTION_FERTILITY)}>
                View Case Study
              </button>
            </li>
            <li className="text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold flex-sm-row flex-column gap-3 justify-content-between m-0 d-flex align-items-center">
              Clymb
              {/* <p>
                    <Image src="/consciousroot.png" alt="Consciousroot Logo" width={100} height={100} />
                </p> */}
              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() => handleRoutes(ROUTES.CLYMB)}>
                View Case Study
              </button>
            </li>
            <li className="text-secondary shadow-sm rounded-pill px-2 py-1 w-100 fw-semibold flex-sm-row flex-column gap-3 justify-content-between m-0 d-flex align-items-center">
              Consciousroot
              {/* <p>
                    <Image src="/consciousroot.png" alt="Consciousroot Logo" width={100} height={100} />
                </p> */}
              <button
                className="ms-3 border-0 p-3 rounded-pill btn btn-primary"
                onClick={() => handleRoutes(ROUTES.CONSCIOUS_ROOT)}>
                View Case Study
              </button>
            </li>
          </AnimatedList>
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
