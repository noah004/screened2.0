import NavigationBar from "../components/navigation-bar";
import pamphletSVG from "../../public/images/Pamphlet.svg";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={"pamphlet"} />
      <div className="container-fluid">
        <div className="row">
          <Image src={pamphletSVG} alt="Screened logo" height={100} />
        </div>
      </div>
    </>
  );
}
