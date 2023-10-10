"use client";
import "../../../public/styles/styles.css";
import upArrow from "../../../public/images/upArrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function onClick() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="go-to-top-button">
      {document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200 ? (
        <button className="go-to-top-button btn" onClick={onClick}>
          <Image src={upArrow} alt="Go to top of the page" height={50} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
