import Image from "next/image";
import logo from "public/images/screened-cropped.png";

export default function NavigationBar({
  currentPage,
}: {
  currentPage: string;
}) {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-md"
      style={{
        backgroundColor: "#b498d3",
        fontSize: "18px",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          <Image src={logo} alt="Screened logo" width={50} height={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <a
                className={"nav-link " + (currentPage === "" && "active")}
                href="."
              >
                Home
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={
                  "nav-link " + (currentPage === "pamphlet" && "active")
                }
                href="pamphlet"
              >
                Pamphlet
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={
                  "nav-link " + (currentPage === "for-patients" && "active")
                }
                href="for-patients"
              >
                For Patients
              </a>
            </li>
            <li className="nav-item me-3">
              <a
                className={
                  "nav-link " +
                  (currentPage === "for-medical-professionals" && "active")
                }
                href="for-medical-professionals"
              >
                For Medical Professionals
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  "nav-link " + (currentPage === "about-us" && "active")
                }
                href="about-us"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
