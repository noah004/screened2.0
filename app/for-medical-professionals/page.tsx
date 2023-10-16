"use client";
import NavigationBar from "../components/navigation-bar";
import forMedicalProfessionalsSVG from "../../public/images/ForMedicalProfessionals.svg";
import Image from "next/image";
import NestedNavigation from "./components/nested-navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 4);
  }, [show]);
  return show ? (
    <>
      <NavigationBar
        color="rgb(171 216 131)"
        currentPage="for-medical-professionals"
      />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={forMedicalProfessionalsSVG}
            alt="For medical professionals"
            style={{ maxHeight: "100px" }}
          />
        </div>
      </div>
      <NestedNavigation colorTheme="green" />
    </>
  ) : null;
}
