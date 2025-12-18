import GetToKnowMe from "../sections/home/GetToKnowMe";
import Hero from "../sections/home/Hero";
import LetsWork from "../sections/home/LetsWork";
import SelectedProjects from "../sections/home/SelectedProjects";

export default function Home() {
  return (
    <div>
      {/* floating logo */}
      <div className="flex lg:hidden z-50 fixed top-4 left-0 right-0">
        <div className="mx-auto">
          <div
            style={{ fontFamily: "var(--font-poppins)" }}
            className="font-bold transition-colors text-dark-900 dark:text-white duration-300"
          >
            NC
            <span
              style={{ fontFamily: "var(--font-inter)" }}
              className="font-bold text-indigo-500"
            >
              {" "}
              {">_"}
            </span>
          </div>
        </div>
      </div>

      <Hero />
      <SelectedProjects />
      <GetToKnowMe />
      <LetsWork />
    </div>
  );
}
