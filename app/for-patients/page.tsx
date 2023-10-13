"use client";
import NavigationBar from "../components/navigation-bar";
import forPatientsSVG from "../../public/images/ForPatients.svg";
import Image from "next/image";
import NestedNavigation from "./components/nested-navigation";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <>
      <NavigationBar color="rgb(241,190,146)" currentPage={"for-patients"} />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={forPatientsSVG}
            alt="For patients"
            style={{ maxHeight: "100px", height: "auto" }}
          />
        </div>
      </div>
      <NestedNavigation colorTheme="orange" />
    </>
  );
}
