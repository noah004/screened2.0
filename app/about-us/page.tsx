import NavigationBar from "../components/navigation-bar";
import aboutUsSVG from "../../public/images/AboutUs.svg";
import kotyJPG from "../../public/images/koty.jpg";
import elianaJPG from "../../public/images/eliana.jpg";
import noaPNG from "../../public/images/noa.png";
import Image from "next/image";
import "../../public/styles/styles.css";
import AboutStaff from "./components/AboutStaff";

const aboutKoty = {
  name: "Koty Negreanu",
  role: "Co Founder",
  image: kotyJPG,
  about:
    "\"I'm a medical resident who is extremely passionate about " +
    "screening and preventative health. My goal is to help make " +
    "information easily accessible so that patients and medical " +
    "professionals can work together to make informed decisions about " +
    'their health."',
};

const aboutEliane = {
  name: "Eliana Rohr",
  role: "Co Founder",
  Image: elianaJPG,
  about:
    '"As medical learners and future physicians, we learn early on about ' +
    "the effects of screening and preventative health on patient outcomes " +
    "and healthcare optimization. Whether you are a " +
    "patient, medical trainee or physician, our hope is that this project " +
    'provided insight and education on the world of screening."',
};

const aboutNoa = {
  name: "Noa Cohen",
  role: "Ambassador & Content Lead",
  Image: noaPNG,
  about:
    "As a medical student and ambassador for this project, I update the " +
    "platform with the latest Canadian screening guidelines to ensure " +
    "accuracy for both patients and healthcare professionals. With a " +
    "strong passion for family medicine, prevention, and holistic care, " +
    "my goal is to help build bridges between evidence-based guidelines " +
    "and everyday practice, so that families and communities can make " +
    "informed decisions about their health and well-being.",
};

export default function Page() {
  return (
    <>
      <NavigationBar color="rgb(241,146,190)" currentPage={"about-us"} />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={aboutUsSVG}
            alt="About us"
            style={{ maxHeight: "100px" }}
          />
        </div>
      </div>
      <div className="container text-center">
        <AboutStaff
          name={aboutKoty.name}
          role={aboutKoty.role}
          image={aboutKoty.image}
          about={aboutKoty.about}
        />
        <AboutStaff
          name={aboutEliane.name}
          role={aboutEliane.role}
          image={aboutEliane.Image}
          about={aboutEliane.about}
        />
        <AboutStaff
          name={aboutNoa.name}
          role={aboutNoa.role}
          image={aboutNoa.Image}
          about={aboutNoa.about}
        />
      </div>
    </>
  );
}
