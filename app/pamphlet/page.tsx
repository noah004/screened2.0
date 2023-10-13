import NavigationBar from "../components/navigation-bar";
import pamphletSVG from "../../public/images/Pamphlet.svg";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavigationBar color="rgb(146,190,241)" currentPage={"pamphlet"} />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={pamphletSVG}
            alt="Screened logo"
            style={{ maxHeight: "100px", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
