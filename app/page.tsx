import NavigationBar from "./components/navigation-bar";
import screenedLogo from "../public/images/logo-better-quality.svg";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavigationBar currentPage={""} />
      <div className="container-fluid">
        <div className="row">
          <Image src={screenedLogo} alt="Screened logo" height={200} />
        </div>
      </div>
    </>
  );
}
