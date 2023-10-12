import NavigationBar from "../components/navigation-bar";
import aboutUsSVG from "../../public/images/AboutUs.svg";
import kotyJPG from "../../public/images/koty.jpg";
import elianaJPG from "../../public/images/eliana.jpg";
import Image from "next/image";
import "../../public/styles/styles.css";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={"about-us"} />
      <div className="container text-center">
        <Image
          src={aboutUsSVG}
          alt="About us"
          style={{ maxHeight: "100px", height: "auto" }}
        />
      </div>
      <div className="container text-center">
        <div className="container">
          <div className="box">
            <Image src={kotyJPG} alt="Koty Negreanu" height={"100"} />
          </div>
        </div>
        <div className="container">
          <Image src={elianaJPG} height={"100"} alt="Eliana rohr" />
        </div>
      </div>
    </>
  );
}
