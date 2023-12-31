import NavigationBar from "./components/navigation-bar";
import screenedLogo from "../public/images/logo-better-quality.svg";
import Image from "next/image";
import "../public/styles/styles.css";
import forPatientsSVG from "../public/images/ForPatients.svg";
import forMedicalProfessionalsSVG from "../public/images/ForMedicalProfessionals.svg";
import aboutUsSVG from "../public/images/AboutUs.svg";
import pamphletSVG from "../public/images/Pamphlet.svg";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={""} />
      <div className="container-fluid" style={{ overflowX: "hidden" }}>
        <div className="row">
          <Image
            src={screenedLogo}
            alt="Screened logo"
            style={{ maxHeight: "200px" }}
          />
        </div>
        <div style={{ maxWidth: "2000px", margin: "auto" }} className="row">
          <div
            className="col-xl-4 col-l-3"
            style={{
              margin: "5% 0 5% 3%",
            }}
          >
            <h1>Welcome to Screened!</h1>
            <br />
            <h3>
              Our goal is to share knowledge about screening and preventative
              health.
            </h3>
            <br />
            <h3>
              This website is designed to provide information to both patients
              and medical professionals.
            </h3>
          </div>
          <div className="col">
            <div className="container">
              <div className="home-box">
                <Image src={forPatientsSVG} alt="For patients" width={200} />
                <div className="inner-home-box">
                  <h5>General Population</h5>
                  Comprehensive screening information to help make educated
                  decisions about your health.
                </div>
                <a href="./for-patients" className="div-link">
                  <span></span>
                </a>
              </div>
              <div className="home-box">
                <Image
                  src={forMedicalProfessionalsSVG}
                  alt="For patients"
                  width={200}
                />
                <div className="inner-home-box">
                  <h5 style={{}}>Physicians, Residents and Medical Students</h5>
                  Information on screening aimed at facilitating clinical
                  encounters.
                </div>
                <a href="./for-medical-professionals" className="div-link">
                  <span></span>
                </a>
              </div>
            </div>
            <div className="container">
              <div className="home-box">
                <Image src={pamphletSVG} alt="For patients" width={200} />
                <div className="inner-home-box">
                  <h5>Everyone</h5>
                  Download our screening pamphlet, in order to keep track of
                  your previous and future screening tests.
                </div>
                <a href="./pamphlet" className="div-link">
                  <span></span>
                </a>
              </div>
              <div className="home-box">
                <Image src={aboutUsSVG} alt="For patients" width={200} />
                <div className="inner-home-box">
                  <h5>Who are we?</h5>
                  <p>Learn about the people behind screened.</p>
                </div>
                <a href="./about-us" className="div-link">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
