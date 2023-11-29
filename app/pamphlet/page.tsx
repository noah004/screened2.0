import NavigationBar from "../components/navigation-bar";
import pamphletSVG from "../../public/images/Pamphlet.svg";
import Image from "next/image";
import "../../public/styles/styles.css";

export default function Page() {
  return (
    <>
      <NavigationBar color="rgb(146,190,241)" currentPage={"pamphlet"} />
      <div className="container-fluid">
        <div className="row">
          <Image
            src={pamphletSVG}
            alt="Screened logo"
            style={{ maxHeight: "100px" }}
          />
        </div>
        <div className="row container-fluid justify-content-center mt-5 pe-0">
          <div className="col-md-8">
            <h3>What is the Pamphlet:</h3>
            <p>
              The screening pamphlet aims to explain the purpose of each test,
              what to expect during the procedure and when you should start the
              specific screening method based on the most up-to-date guidelines.
              We also provide tips on how best to prepare for the test.
            </p>

            <h3>How to use:</h3>
            <p>
              The first section provides comprehensive information on the
              different screening tests based on current guidelines and
              recommendations. The second section of the pamphlet features a
              chart which allows you to keep track of your screening tests. By
              using the chart, you can stay organized and up-to-date with your
              screening schedule.
            </p>

            <h4>Disclaimer:</h4>
            <p>
              It is important to remember that screening is a personal choice
              and should always be taken with consideration to your goals and
              values, alongside medical recommendations. Before deciding on
              pursuing a test, you should carefully consider the risks and
              benefits. By working with your healthcare professional and making
              an informed decision, you can take control of your health and
              ultimately make the best choice for you.
            </p>
            <h2
              className="pamphlet-download-link"
              style={{
                borderWidth: "3px",
                borderColor: "rgb(146,190,241)",
              }}
            >
              <a
                href="/files/pamphlet.pdf"
                download="Screened_Pamphlet"
                style={{
                  color: "rgb(146,190,241)",
                  textDecoration: "none",
                  width: "fit-content",
                  maxWidth: "100px",
                  padding: "4px",
                }}
              >
                Download the Pamphlet
              </a>
            </h2>
            <br />
            <h5>
              Visit the{" "}
              <a href="./for-patients" className="orange">
                For Patients
              </a>{" "}
              section for more detailed information about each screening test.
            </h5>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
