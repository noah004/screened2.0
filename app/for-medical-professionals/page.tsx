import NavigationBar from "../components/navigation-bar";
import forMedicalProfessionalsSVG from "../../public/images/ForMedicalProfessionals.svg";
import Image from "next/image";
import NestedNavigation from "./components/nested-navigation";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={"for-medical-professionals"} />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={forMedicalProfessionalsSVG}
            alt="For medical professionals"
            style={{ maxHeight: "100px", height: "auto" }}
          />
        </div>
      </div>
      <NestedNavigation />
    </>
  );
}
