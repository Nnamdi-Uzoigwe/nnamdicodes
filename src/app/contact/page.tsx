import ContactHeader from "../sections/contact/ContactHeader";
import ContactSection from "../sections/contact/ContactSection";

export default function Contact() {
  return (
    <div>
      {/* floating logo */}
      <div className="flex lg:hidden z-50 fixed top-4 left-0 right-0 pointer-events-none">
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

      <ContactHeader />
      <ContactSection />
    </div>
  );
}
