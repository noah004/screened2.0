import NavigationBar from "../components/navigation-bar";
import forPatientsSVG from "../../public/images/ForPatients.svg";
import Image from "next/image";
import NestedNavigation from "../components/nested-navigation";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={"for-patients"} />
      <div className="container-fluid">
        <div className="row">
          <Image src={forPatientsSVG} alt="For patients" height={100} />
        </div>
      </div>
      <NestedNavigation />
    </>
  );
}
