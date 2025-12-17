import StackContent from "../sections/stack/StackContent";
import StackHeader from "../sections/stack/StackHeader";

export default function Stack() {
  return (
    <div>
      {/* floating logo */}
      <div className="flex lg:hidden z-50 fixed top-4 left-0 right-0">
        <div className="mx-auto">
          <div className="font-bold transition-colors duration-300 text-white">
            <span className="text-red-600">{"<"}</span>
            <span className="text-green-600 mr-1">{">"}</span>
            Nnamdi
          </div>
        </div>
      </div>

      <StackHeader />
      <StackContent />
    </div>
  );
}
