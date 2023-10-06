import NavigationBar from "../components/navigation-bar";
import aboutUsSVG from "../../public/images/AboutUs.svg";
import kotyJPG from "../../public/images/koty.jpg";
import elianaJPG from "../../public/images/eliana.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={"about-us"} />
      <div className="container text-center">
        <Image src={aboutUsSVG} alt="About us" height={100} />
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Image src={kotyJPG} alt="Koty Negreanu" height={"10"} />
          </div>
          <div className="col">
            <Image src={elianaJPG} height={"10"} alt="Eliana rohr" />
          </div>
        </div>
      </div>
    </>
  );
}
