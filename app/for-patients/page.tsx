"use client";
import NavigationBar from "../components/navigation-bar";
import forPatientsSVG from "../../public/images/ForPatients.svg";
import Image from "next/image";
import NestedNavigation from "./components/nested-navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 4);
  }, [show]);
  return show ? (
    <>
      <NavigationBar color="rgb(241,190,146)" currentPage={"for-patients"} />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={forPatientsSVG}
            alt="For patients"
            style={{ maxHeight: "100px" }}
          />
        </div>
      </div>
      <NestedNavigation colorTheme="orange" />
    </>
  ) : null;
}
