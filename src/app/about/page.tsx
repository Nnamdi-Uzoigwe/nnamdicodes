import AboutHeader from "../sections/about/AboutHeader";
import MainContent from "../sections/about/MainContent";

export default function About() {
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

      <AboutHeader />
      <MainContent />
    </div>
  );
}
