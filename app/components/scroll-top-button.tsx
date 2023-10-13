"use client";
import "../../public/styles/styles.css";
import upArrowPurple from "../../public/images/upArrowPurple.svg";
import upArrowOrange from "../../public/images/upArrowOrange.svg";
import upArrowGreen from "../../public/images/upArrowGreen.svg";
import upArrowBlue from "../../public/images/upArrowBlue.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function onClick() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
interface arrows {
  [key: string]: string;
}
const arrows: arrows = {
  purple: upArrowPurple,
  orange: upArrowOrange,
  green: upArrowGreen,
  blue: upArrowBlue,
};

export default function ScrollTopButton({
  colorTheme = "purple",
}: {
  colorTheme?: string;
}) {
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

  const className =
    colorTheme + " go-to-top-button btn " + (!show && "disabled inv");

  return (
    <div className="go-to-top-button">
      <button className={className} onClick={onClick}>
        <Image
          src={arrows[colorTheme]}
          alt="Go to top of the page"
          height={50}
        />
      </button>
    </div>
  );
}
