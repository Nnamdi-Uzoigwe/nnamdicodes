import AboutHeader from "../sections/about/AboutHeader";
import MainContent from "../sections/about/MainContent";

export default function About() {
  return (
    <div>
      {/* floating logo */}
      <div className="flex lg:hidden z-50 fixed top-4 left-0 right-0">
        <div className="mx-auto">
          <div className="font-bold transition-colors duration-300 text-white">
            {"<>"}
            Nnamdi
          </div>
        </div>
      </div>

      <AboutHeader />
      <MainContent />
    </div>
  );
}
