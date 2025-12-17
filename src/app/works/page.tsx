import WorksContent from "../sections/works/WorksContent";
import WorksHeader from "../sections/works/WorksHeader";

export default function Works() {
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

      <WorksHeader />
      <WorksContent />
    </div>
  );
}
