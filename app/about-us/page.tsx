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
            <Image
              className="profile-image"
              src={kotyJPG}
              alt="Koty Negreanu"
              height={"100"}
            />
            <div>
              <h3>Koty Negreanu, Co-Founder</h3>
              <p>
                “I&apos;m a medical student who is extremely passionate about
                screening and preventative health. My goal is to help make
                information easily accessible so that patients and medical
                professionals can work together to make informed decisions about
                health.”
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <Image
              className="profile-image"
              src={elianaJPG}
              height={"100"}
              alt="Eliana rohr"
            />
            <div>
              <h3>Eliana Rohr, Co-Founder</h3>
              <p>BLUUUURBBBBBBB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
