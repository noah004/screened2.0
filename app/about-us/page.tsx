import NavigationBar from "../components/navigation-bar";
import aboutUsSVG from "../../public/images/AboutUs.svg";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={"about-us"} />
      <div className="container-fluid">
        <div className="row">
          <Image src={aboutUsSVG} alt="About us" height={100} />
        </div>
      </div>
    </>
  );
}
