import ContactHeader from "../sections/contact/ContactHeader";
import ContactSection from "../sections/contact/ContactSection";

export default function Contact() {
  return (
    <div>
      {/* floating logo */}
      <div className="flex lg:hidden z-50 fixed top-4 left-0 right-0 pointer-events-none">
        <div className="mx-auto">
          <div className="font-bold transition-colors duration-300 text-white">
            <span className="text-red-600">{"<"}</span>
            <span className="text-green-600 mr-1">{">"}</span>
            Nnamdi
          </div>
        </div>
      </div>

      <ContactHeader />
      <ContactSection />
    </div>
  );
}
