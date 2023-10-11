"use client";
import "../../../public/styles/styles.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollTopButton from "../../components/scroll-top-button";
import papTestPNG from "../images/pap-test.png";
import CHEPCriteriaPNG from "../images/chep-criteria.png";
import initiatingStatins1PNG from "../images/initiating-statins-part1.png";
import initiatingStatins2PNG from "../images/initiating-statins-part2.png";

export default function NestedNavigation() {
  //set the underlined state:
  const sectionsArr: Array<Array<string>> = [
    // the first string in each array is the section,
    //the others are sub-sections

    ["Breast Cancer"],
    ["Cervical Cancer"],
    ["Colorectal Cancer"],
    ["Lung Cancer"],

    ["Type Two Diabetes"],
    ["Hypertension"],
    ["Abdominal Aortic Aneurysm"],
    ["Fragility Fractures"],
    ["Dyslipidemia"],
  ];

  //Create an underlined state for all table of content items
  const initialUnderlined: { [key: string]: boolean } = {};
  sectionsArr.flat(2).forEach((section) => {
    initialUnderlined[section] = false;
  });
  const [underlined, setUnderlined] = useState(initialUnderlined);

  //Create a reference object for all text sections
  const initialRef: { [key: string]: HTMLDivElement } = {};
  const refs = useRef(initialRef);
  //Effect for underlining proper section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -90% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const underlinedCopy = { ...underlined };
        if (entry.isIntersecting) {
          underlinedCopy[entry.target.id] = !underlinedCopy[entry.target.id];
          setUnderlined(underlinedCopy);
        }
      });
    }, options);
    Object.values(refs.current).forEach((ref) => {
      observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  //Keeping track of window size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    //The nested navigation
    <div className="container-fluid">
      <ScrollTopButton />
      <div className="row">
        <div
          className="col-md-2 cl-12 px-0"
          style={windowWidth > 767 ? { maxWidth: "200px" } : {}}
        >
          <nav
            id="nested-nav"
            className={
              (windowWidth <= 767 ? "bg-body-tertiary " : "") +
              "navbar navbar-expand-md flex-column align-items-stretch my-3 ps-md-2 border-end sticky-top overflow-auto"
            }
            style={
              windowWidth > 767
                ? { maxHeight: "100vh", minHeight: "90vh" }
                : {
                    maxHeight: "90vh",
                    maxWidth: "80%",
                    marginLeft: "10%",
                    padding: "0px",
                    borderRadius: "7px",
                  }
            }
          >
            <div className={windowWidth <= 767 ? "container-fluid px-0" : ""}>
              <button
                className="navbar-toggler nested-nav-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#pageInfo"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>On this page</span>
              </button>
              <nav
                id="pageInfo"
                className="nav nav-pills navbar-collapse collapse flex-column"
              >
                <div>
                  {sectionsArr.map((section) => {
                    return section.map((subSection, index) => {
                      let className = "nav-item nav-link ms-3 text-secondary";
                      if (index == 0)
                        className = "nav-item nav-link text-secondary-emphasis";
                      if (index == section.length - 1) className += " mb-1";
                      return (
                        <a
                          key={subSection}
                          className={
                            className +
                            (underlined[subSection] && windowWidth > 767
                              ? " underline"
                              : "")
                          }
                          style={
                            windowWidth <= 767
                              ? { textAlign: "center", alignSelf: "center" }
                              : {}
                          }
                          href={"#" + subSection}
                        >
                          {subSection}
                        </a>
                      );
                    });
                  })}
                </div>
              </nav>
            </div>
          </nav>
        </div>
        <div
          className="col-md-9 px-4"
          style={{ overflow: "hidden", overflowWrap: "break-word" }}
        >
          <div
            ref={(element) => {
              refs.current.breast = element!;
            }}
            id={"Breast Cancer"}
          >
            <h1>Breast Cancer</h1>
            <p>
              In average risk individuals, It is recommended to start screening
              at age 50 with a mammogram every 2 years.<sup>1</sup>
            </p>
            <p>
              Screening may begin earlier for individuals who are at higher risk
              of breast cancer. This may include:<sup>2</sup>
              <ul>
                <li>Women with personal or family history of breast cancer</li>
                <li>
                  Women who are carriers of gene mutations (BRCA 1 or BRCA 2) or
                  first degree relative with these conditions
                </li>
                <li>
                  Women who had chest radiation before the age of 30 or within
                  the last 8 years
                </li>
              </ul>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/breast-cancer-update/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Breast Cancer Update (2018) - Canadian Task Force on
                  Preventive Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://cancer.ca/en/cancer-information/cancer-types/breast/risks
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Risks for breast cancer | Canadian Cancer Society.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.cervical = element!;
            }}
            id="Cervical Cancer"
          >
            <h1>Cervical Cancer</h1>
            <p>
              Pap tests are recommended to begin at age 21 if sexually active.
              If normal, it can be repeated every 2-3 years. Screening can stop
              at age 65 if the last 2 tests in the past 10 years were negative
              <sup>1</sup>
            </p>
            <p>
              Please see the image below on how to proceed based on the pap test
              result.<sup>2</sup>
            </p>
            <Image
              src={papTestPNG}
              alt="Pap test results diagram"
              style={{ width: "100%", height: "auto", marginBottom: "30px" }}
              sizes="100vw"
            />
            <p>
              Please note: the current recommended screening test in Quebec is a
              pap test. However, there has been discussion surrounding
              transitioning toward the HPV test as a primary screening tool. We
              will provide updates on this website as they become available.
            </p>
            <p>
              In order to prevent the risk of cervical cancer, the vaccination
              against HPV is recommended ideally prior to sexual debut.
            </p>
            <p>
              In Quebec, 2 doses are offered. First, Gardasil is offered in
              grade 4 and then Cervarix is offered in grade 9.<sup>3</sup>
            </p>
            <p>
              Please visit this{" "}
              <a
                href="https://www.youtube.com/watch?v=uJXoL1RbVi0&t=135s"
                className="purple"
              >
                video
              </a>{" "}
              for <b style={{ color: "red" }}>streps</b> on performing a pap
              test.
            </p>
            <p>
              Guidelines across all provinces can be found{" "}
              <a
                className="purple"
                href="https://www.partnershipagainstcancer.ca/topics/cervical-cancer-screening-in-canada-2021-2022/programs/guidelines/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1503/cmaj.121505"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canadian Task Force on Preventive Health Care. Recommendations
                  on screening for cervical cancer.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.inspq.qc.ca/sites/default/files/publications/1371_guidelinescervicalcancerscreeningqc.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Working group on guidelines for cervical cancer screening in
                  Québec. Guidelines on Cervical Cancer Screening in Québec.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.quebec.ca/en/health/advice-and-prevention/vaccination/human-papillomavirus-hpv-vaccination-program/eligibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eligibility - Human Papillomavirus (HPV) Vaccination Program.
                  Gouvernement du Québec.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.colorectal = element!;
            }}
            id="Colorectal Cancer"
          >
            <h1>Colorectal Cancer</h1>
            <p>
              The primary screening test for colorectal cancer is a FIT every 2
              years. For an average risk individual, it can begin at age 50 and
              stop at age 74<sup>1,2</sup>
            </p>
            <p>
              A FIT test can be picked up and dropped off at a specimen location
              center.
            </p>
            <p>
              A flexible sigmoidoscopy may also be used for screening. If
              negative, it can be repeated every 10 years.<sup>2</sup>
            </p>
            <p>
              Indications for semi elective colonoscopy (&lt;60 days):
              <sup>3</sup>
              <ol>
                <li>Positive FIT</li>
                <li>Clinical suspicion of IBD</li>
                <li>
                  Rectal bleeding with or without hemorrhoids over the age of 40
                </li>
                <li>Unexplained iron deficiency anemia</li>
                <li>Recent change in bowel habits</li>
                <li>Polyps viewed on imaging</li>
                <li>Suspicion of occult colorectal cancer</li>
                <li>Diverticulitis in the post acute phase</li>
              </ol>
            </p>
            <p>
              Indications for an elective colonoscopy in &lt; 6 months:
              <ol>
                <li>
                  In Quebec, high risk individuals include those with a
                  significant family history as defined by:
                  <ul>
                    <li>
                      Colorectal cancer or polyps (except for hyperplastic
                      polyps &lt; 10 mm present in the rectum or sigmoid colon)
                      in a first degree relative below the age of 60
                      <ul>
                        <li>
                          2 first degree relatives regardless of age when
                          diagnosed
                        </li>
                        <li>
                          1 first degree and 1 second degree relative on the
                          same family side, regardless of age when diagnosed
                        </li>
                      </ul>
                    </li>
                  </ul>{" "}
                </li>
                <li>
                  Individuals less than 40 years old with rectal bleeding with
                  or without hemorrhoids
                </li>
                <li>
                  Individuals with chronic constipation or chronic diarrhea
                </li>
              </ol>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://www.partnershipagainstcancer.ca/topics/colorectal-cancer-screening-in-canada-2021-2022/programs/guidelines/"
                  target="_blank"
                  rel="noopener norefeerer"
                >
                  Provincial and territorial screening guidelines. Canadian
                  Partnership Against Cancer.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/colorectal-cancer/"
                  target="_blank"
                  rel="noopener norefeerer"
                >
                  Colorectal Cancer (2016) – Canadian Task Force on Preventive
                  Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="http://msssa4.msss.gouv.qc.ca/intra/formres.nsf/961885cb24e4e9fd85256b1e00641a29/2f9c2fbcfc52238a85257a08004ff440/$FILE/AH-702A_DT9251(2017-12)D.pdf"
                  target="_blank"
                  rel="noopener norefeerer"
                >
                  Sante et services sociaux Quebec. Colonoscopy Referral.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.lung = element!;
            }}
            id="Lung Cancer"
          >
            <h1>Lung Cancer</h1>
            <p>
              Currently, Quebec is undergoing a screening demonstration project
              that offers higher risk individuals the opportunity to receive
              lung cancer screening.<sup>1</sup>
            </p>
            <p>
              A low dose CT scan is offered to individuals aged 55-74 who have
              smoked continuously or on-off for at least 20 years, or who have
              smoked for at least 2 years (on or on-off) and quit less than 15
              years ago.
            </p>
            <p>
              Without intervention, the yearly death toll and
              disability-adjusted life years caused by smoking is projected to
              rise in the upcoming decades.<sup>2</sup> We would like to
              emphasize the significance of initiating a conversation on smoking
              cessation in a respectable and patient centered manner. It is
              recommended to quit smoking at any juncture. People who decide to
              quit smoking before middle age (approximately 30 years of age) can
              avoid more than 90% of lung cancer mortality related to smoking,
              and individuals who decide to quit smoking show a similar pattern
              of survival to those who have never smoked.<sup>3</sup>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://www.quebec.ca/en/health/advice-and-prevention/screening-and-carrier-testing-offer/lung-cancer-screening-demonstration-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lung cancer screening demonstration project. Gouvernement du
                  Québec.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1016/s0140-6736(21)01169-7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reitsma MB, Kendrick PJ, Ababneh E, et al. Spatial, temporal,
                  and demographic patterns in prevalence of smoking tobacco use
                  and attributable disease burden in 204 countries and
                  territories, 1990-2019: a systematic analysis from the Global
                  Burden of Disease Study 2019.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1038/nrc2703"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jha P. Avoidable global cancer deaths and total deaths from
                  smoking.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.typeTwoDiabetes = element!;
            }}
            id="Type Two Diabetes"
          >
            <h1>Type Two Diabetes</h1>
            <p>
              According to the Canadian Task Force, recommendations for primary
              screening of type two diabetes depend on the patient&apos;s level
              of risk, which can be validated by screening tools. They do not
              apply for people with symptoms of diabetes or people who are at
              risk of developing type two diabetes.<sup>1</sup>
            </p>
            <p>
              One can use the FINDRISC<sup>2</sup> to assess the risk.
            </p>
            <p>
              Depending on the results with the validated tool, the following
              recommendations are:
              <ul>
                <li>
                  <b>Low risk</b>: no routine screening is recommended
                </li>
                <li>
                  <b>High risk</b>: A1C every 3-5 years
                </li>
                <li>
                  <b>Very high risk</b>: A1C every year
                </li>
              </ul>
            </p>
            <p>
              Note that A1C is the preferred screening test, but fasting glucose
              measurement and glucose tolerance test can be used as
              alternatives.<sup>1</sup>
            </p>
            <p>
              The Diabetes Canada guidelines differ slightly from the
              recommendations stated above. According to Diabetes Canada
              guidelines, screening for type 2 diabetes using fasting plasma
              glucose and/or A1c can begin at age 40 or earlier if at high risk
              using a calculator (such as CANRISK). Screening can then be
              repeated every 3 years.<sup>3</sup>
            </p>
            <p>
              Development of diabetes can likewise be mitigated by various
              lifestyle modifications. Engaging in a healthy diet, such as the
              DASH diet has been associated with a lower risk of developing type
              2 diabetes.<sup>4</sup> Physical activity has likewise been shown
              to lower the risk of developing diabetes. Engaging in 150 min/week
              of moderate-intensity physical activity, such as brisk walking,
              shows beneficial effects in those with prediabetes.<sup>5</sup>{" "}
              Lastly, evaluation for smoking habits should be done for all
              patients at risk of diabetes.<sup>6</sup> It is strongly
              encouraged for all patients to make efforts to quit smoking.
              <sup>7</sup> Please refer your patients to{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobaco-Free Quebec
              </a>{" "}
              for more information.
            </p>
            <p>
              Encourage open dialogue with your patients and address patient
              questions and concerns. This approach ensures a thorough and open
              discussion of risk reduction strategies for diabetes management,
              to hopefully encourage longitudinal adoption of these behaviors.
            </p>
            <p>
              Motivational interviewing techniques for diet, exercise weight and
              smoking cessation:
              <ul>
                <li>
                  <a
                    className="purple"
                    href="https://media.ruddcenter.uconn.edu/PDFs/MotivationalInterviewing.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Motivational Interviewing for Diet, Exercise and Weight.
                  </a>
                </li>
                <li>
                  <a
                    className="purple"
                    href="https://ottawamodel.ottawaheart.ca/sites/ottawamodel.ottawaheart.ca/files/omsc/docs/3.increasingmotivationtostopsmoking.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Getting beyond “Now is not a good time to quit smoking”
                    Increasing motivation to stop smoking.
                  </a>
                </li>
              </ul>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/type-2-diabetes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diabetes, Type 2 (2012) - Canadian Task Force on Preventive
                  Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.mdcalc.com/calc/4000/findrisc-finnish-diabetes-risk-score"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FINDRISC (Finnish Diabetes Risk Score). MDCalc.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://guidelines.diabetes.ca/cpg/chapter4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  “Screening for Diabetes in Adults.” My Site - Chapter 4:
                  Screening for Diabetes in Adults
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.3945%2Fjn.115.218487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salas-Salvadó J, Guasch-Ferré M, Lee CH, Estruch R, Clish CB,
                  Ros E. Protective Effects of the Mediterranean Diet on Type 2
                  Diabetes and Metabolic Syndrome.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1056/nejmoa012512"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DReduction in the Incidence of Type 2 Diabetes with Lifestyle
                  Intervention or Metformin.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://myhealth.alberta.ca:443/Health/aftercareinformation/pages/conditions.aspx?hwid=ad1603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eliasson B. Cigarette smoking and diabetes.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.7326/0003-4819-152-1-201001050-00005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yeh HC. Smoking, Smoking Cessation, and Risk for Type 2
                  Diabetes Mellitus: A Cohort Study.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.hypertension = element!;
            }}
            id="Hypertension"
          >
            <h1>Hypertension</h1>
            <p>
              Screening for hypertension can be started at all appropriate
              primary care visits for adults aged 18 and older.<sup>1</sup>
            </p>
            <p>
              The various risks associated with high blood pressure increase
              with age and comorbidities amongst other factors, and should be
              taken into consideration in various health visits.
            </p>
            <p>
              If your patient meets criteria for elevated blood pressure, follow
              the CHEP criteria to assess whether they meet criteria for
              diagnosis. The image below is adapted from the hypertension canada
              guidelines and can aid in diagnosis.<sup>2</sup>
            </p>
            <Image
              src={CHEPCriteriaPNG}
              alt="Hypertension Canada Guidline Diagram"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              While patients are in office, it may be prudent to calculate the
              10-year risk of heart attack using the Framingham risk assessment,
              intended for patients aged 30-79 years old without history of CAD,
              claudication, or diabetes. The factors included in the calculation
              include age, total cholesterol, HDL, SBP, hypertensive treatment
              and smoking status, and can be shown as a visual aid to patients
              to help assess their risk and if they are candidates for
              additional treatment.<sup>3,4</sup>
            </p>
            <p>
              Demonstrative calculator to be used with patients:{" "}
              <a
                className="purple"
                href="https://cvdcalculator.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CVD Risk/Benefit Calculator
              </a>
              .
            </p>
            <p>
              Framingham risk score calculator:{" "}
              <a
                className="purple"
                href="https://www.mdcalc.com/calc/38/framingham-risk-score-hard-coronary-heart-disease"
                target="_blank"
                rel="noopener noreferrer"
              >
                Framingham Risk Score for Hard Coronary Heart Disease
              </a>
              .
            </p>
            <p>
              For a comprehensive overview on management of hypertension in a
              primary care setting, please visit the following article:{" "}
              <a
                className="purple"
                href="https://www.cfp.ca/content/65/10/725"
                target="_blank"
                rel="noopener noreferrer"
              >
                Managing hypertension in primary care
              </a>
              .
            </p>
            <p>
              To decrease the risks associated with hypertension or to mitigate
              its development, there are many steps that people can take.
              Encourage engagement in regular physical activity, maintaining a
              healthy body weight, and reducing alcohol consumption. Likewise,
              diet modifications such as the DASH diet and reduction of sodium
              intake are also useful steps to take.<sup>5,6</sup>
            </p>
            <p>
              Brochure to give to patients:{" "}
              <a
                className="purple"
                href="https://guidelines.hypertension.ca/wp-content/uploads/2022/09/HTC_Brochure_BPActionPlan.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blood Pressure Action Plan
              </a>
              .
            </p>
            <p>
              <h4>Proper assessment of manual BP reading:</h4>
              *Of note, Measurement using validated electronic (oscillometric)
              upper arm devices is preferred over auscultation.<sup>7</sup>
            </p>
            <p>
              Before beginning, make sure that your patient has:
              <ul>
                <li>Legs uncrossed.</li>
                <li>Arm bare and supported.</li>
                <li>Back and feet supported.</li>
                <li>
                  Ensure no talking or movement during the blood pressure
                  reading.
                </li>
              </ul>
            </p>
            <h5>
              Steps for auscultation method of blood pressure assessment:
              <sup>8</sup>
            </h5>
            <ol>
              <li>
                Ensure appropriate size of blood pressure cuff, ask patient to
                remove sleeve for best result.
              </li>
              <li>
                Confirm brachial artery by palpating medial to biceps tendon.
              </li>
              <li>
                Estimate an approximate systolic blood pressure by palpating the
                radial pulse with index and middle finger, and inflate the cuff
                until radial pulse is gone. Make note of this value.
              </li>
              <li>
                To accurately assess blood pressure:
                <ol type="a">
                  <li>Position stethoscope over brachial artery.</li>
                  <li>
                    Reinflate cuff to approximately 20 above the systolic blood
                    pressure you heard.
                  </li>
                  <li>Slowly deflate cuff 2 mm hg per second.</li>
                  <li>
                    With a stethoscope, listen to the FIRST pulsatile noise.
                    This is known as Kortokoff sound, and reflects systolic BP.
                  </li>
                  <li>
                    Continue deflating the cuff until the pulsatile noise
                    disappears, this reflects the diastolic BP.
                  </li>
                </ol>
              </li>
            </ol>

            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/hypertension/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hypertension (2012) - Canadian Task Force on Preventive Health
                  Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://hypertension.ca/guidelines/diagnosis-assessment/diagnosis-assessment-diagnosis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Criteria for Diagnosis of Hypertension and Guidelines for
                  Follow-up. Hypertension Canada | For Healthcare Professionals.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.mdcalc.com/calc/38/framingham-risk-score-hard-coronary-heart-disease"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Framingham Risk Score for Hard Coronary Heart Disease. MDCalc.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://cvdcalculator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Risk Calculator.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.nhlbi.nih.gov/education/dash-eating-plan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DASH Eating Plan | NHLBI, NIH.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1016/j.cjca.2020.02.086"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rabi DM, McBrien KA, Sapir-Pichhadze R, et al. Hypertension
                  Canada&apos;s 2020 Comprehensive Guidelines for the
                  Prevention, Diagnosis, Risk Assessment, and Treatment of
                  Hypertension in Adults and Children.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://hypertension.ca/guidelines/diagnosis-assessment/measuring-blood-pressure/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accurate Measurement of Blood Pressure. Hypertension Canada |
                  For Healthcare Professionals.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.practicalclinicalskills.com/blood-pressure-measurement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blood Pressure Measurement | Lessons, Cases and Cuff
                  Simulator.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.abdominalAorticAneurysm = element!;
            }}
            id="Abdominal Aortic Aneurysm"
          >
            <h1>Abdominal Aortic Aneurysm</h1>
            <p>
              As per screening recommendations by the Canadian Task Force, men
              aged 65 to 80 years should undergo a one-time AAA screening using
              abdominal ultrasound.<sup>1</sup>
            </p>
            <p>
              In addition to screening, there are various things that patients
              can do to reduce their risk of developing an AAA or reduce its
              growth.<sup>2</sup> All patients should be screened for smoking
              use and smoking cessation should be encouraged, as it is widely
              accepted as a key modifiable risk factor in the development of
              AAA.<sup>3</sup> You can direct your patients to{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobaco-Free Quebec
              </a>{" "}
              for support to quit smoking.
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/abdominal-aortic-aneurysm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abdominal Aortic Aneurysm (2017) - Canadian Task Force on
                  Preventive Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.3390/biomedicines10010094"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kessler V, Klopf J, Eilenberg W, Neumayer C, Brostjan C. AAA
                  Revisited: A Comprehensive Review of Risk Factors, Management,
                  and Hallmarks of Pathogenesis.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1001/archinte.160.10.1425"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lederle FA. The Aneurysm Detection and Management Study
                  Screening Program: Validation Cohort and Final Results.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.fragilityFractures = element!;
            }}
            id="Fragility Fractures"
          >
            <h1>Fragility Fractures</h1>
            <p>
              Screening for fragility fractures as recommended by the Canadian
              Task Force should be assessed in females &gt; 65 years in age.
              <sup>1</sup>
            </p>
            <p>
              One can start by using a fracture risk estimation tool, such as{" "}
              <a
                className="purple"
                href="https://frax.canadiantaskforce.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the FRAX
              </a>
              , to initiate shared decision making.
            </p>
            <p>
              At this point, a bone mineral density (BMD) test is not required.
            </p>
            <h4>
              For a conversation on risk management, consider the following
              approach:<sup>2</sup>
            </h4>
            <ol>
              <li>
                Contemplating the likelihood of fracture, whether with or
                without treatment
              </li>
              <li>
                Assessing the probability of an adverse event arising from
                treatment.
              </li>
            </ol>
            <p>
              Conversations to consider include: expected benefit of therapy
              (e.g., reduction of fracture risk with osteoporosis drugs) and
              potential harms of therapy (overdiagnosis, and adverse effects
              from medication ranging from common (such as reflux) to rare and
              serious such as atypical femoral fracture and osteonecrosis of the
              jaw).
            </p>
            <p>
              For a more comprehensive overview on shared decision making,
              please refer to the following article:{" "}
              <a
                className="purple"
                href="https://doi.org/10.1016/j.jocd.2010.06.005"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lewiecki, E. Michael. &quot;Risk communication and shared
                decision making in the care of patients with osteoporosis.&quot;
              </a>
              .
            </p>
            <p>
              If a patient agrees to undergo further investigations and a BMD is
              performed, you should re-estimate the risk by adding the BMD risk
              score to the calculation:{" "}
              <a
                className="purple"
                href="https://frax.shef.ac.uk/FRAX/index.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                FRAX
              </a>
            </p>
            <p>
              Currently, there are no definitive guidelines indicating the
              optimal timeframe for rescreening, and within an 8-year period may
              not be beneficial.<sup>1</sup>
            </p>
            <p>
              Vitamin D supplementation is routinely recommended for Canadian
              adults year round.<sup>3</sup>
            </p>
            <p>
              Weight bearing exercise and resistance training has been shown to
              support bone health, as increased load on bones leads to calcium
              deposition.<sup>4</sup>
            </p>
            <p>
              It is also crucial to consider measures for fall prevention as
              falls are a primary contributor to disability. Falls result from
              an interplay of various risk factors causing an inability to
              maintain or regain balance, and encompass biological, behavioral,
              social, economic, and environmental aspects.<sup>5</sup> To
              address these concerns, consider viewing the following link which
              provides a module for an overview of fall prevention and
              assessment:{" "}
              <a
                className="purple"
                href="https://www.rgpeo.com/stop-falls/health-professionals/#education-modules."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fall Prevention For Health Professionals
              </a>
              .
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/fragility-fractures/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fragility Fractures (2023) - Canadian Task Force on Preventive
                  Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1016/j.jocd.2010.06.005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lewiecki EM. Risk Communication and Shared Decision Making in
                  the Care of Patients With Osteoporosis.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://osteoporosis.ca/vitamin-d/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vitamin D: Osteoporosis Canada.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.3390/healthcare5040085"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  McMillan L, Zengin A, Ebeling P, Scott D. Prescribing Physical
                  Activity for the Prevention and Treatment of Osteoporosis in
                  Older Adults.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors/publications/publications-general-public/seniors-falls-canada-second-report.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada PHA of. Seniors&apos; Falls in Canada: Second Report.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.dyslipidemia = element!;
            }}
            id={"Dyslipidemia"}
          >
            <h1>Dyslipidemia</h1>
            <p>
              According to the canadian cardiovascular society guidelines, lipid
              screening is recommended for men and women above 40 years of age,
              or at any age with one of the following risk factors:<sup>1</sup>
              <ul>
                <li>Clinical evidence of atherosclerosis</li>
                <li>AAA</li>
                <li>Diabetes mellitus</li>
                <li>Arterial hypertension</li>
                <li>Active cigarette smoker</li>
                <li>Stigmata of dyslipidemia </li>
                <li>
                  Family history of premature cardiovascular disease (first
                  degree relatives: Men &lt; 55 years old and women &lt; 65
                  years old)
                </li>
                <li>Family history of dyslipidemia</li>
                <li>CKD </li>
                <li>Obesity (BMI ≥ 30)</li>
                <li>Inflammatory diseases</li>
                <li>HIV infection</li>
                <li>Erectile dysfunction</li>
                <li>COPD</li>
                <li>History of hypertensive disorder of pregnancy</li>
              </ul>
            </p>
            <p>
              Screening includes a detailed history and physical exam, a
              standard non fasting lipid profile including: TC, LDL-C, HDL-C,
              non-HDL-C, TG, FPG or A1c, eGFR, and a one time initial screening
              of Lipoprotein(a).<sup>1</sup>
            </p>
            <p>
              Once lipid profile is done, the framingham risk assessment can be
              used to calculate their risk of major cardiovascular events.
              Patients will be stratified into low, intermediate or high risk
              which will aid in guiding therapy. Please see{" "}
              <a href="#initiatingStatins1PNG" className="purple">
                image
              </a>{" "}
              below for an approach to initiating statins.
            </p>
            <p>
              Repeat screening with either the framingham risk assessment or the
              Cardiovascular Life Expectancy Model (CLEM) tools should be
              performed every 5 years for men and women aged 40 to 75.
            </p>
            <p>
              Lifestyle interventions can also have effects on lowering overall
              lipid levels and reducing cardiovascular events. Encourage
              patients to engage in regular physical activity in order to
              accumulate 150 minutes of moderate to vigorous aerobic activity
              per week. It may also be beneficial to engage in muscle and bone
              strengthening activities for 2 days per week.<sup>1</sup>
            </p>
            <p>
              As well, maintaining a healthy diet is an important factor to
              mitigate risk. The mediterranean diet can be adopted as it has
              evidence for improving cardiovascular outcomes.<sup>1,2</sup>
            </p>
            <Image
              id="initiatingStatins1PNG"
              src={initiatingStatins1PNG}
              alt="Initiating Statins Diagram Part 1"
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              src={initiatingStatins2PNG}
              alt="Initiating Statins Diagram Part 2"
              style={{ width: "100%", height: "auto" }}
            />
            <i>
              Image from:{" "}
              <a
                className="purple"
                href="https://ccs.ca/app/uploads/2022/07/2022-Lipids-Gui-PG-EN.pdf5"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Canadian Cardiovascular Society&apos;s Dyslipidemia
                Guidelines
              </a>
              .
            </i>
            <p style={{ marginTop: "30px" }}>
              <b>Direct Links:</b>
              <ul>
                <li>
                  <a
                    className="purple"
                    href="https://www.mdcalc.com/calc/38/framingham-risk-score-hard-coronary-heart-disease"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Framingham risk score
                  </a>
                </li>
                <li>
                  <a
                    className="purple"
                    href="https://myhealthcheckup.com/cvd/?la"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cardiovascular Life Expectancy Model
                  </a>
                </li>
              </ul>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1016/j.cjca.2021.03.016"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pearson GJ, Thanassoulis G, Anderson TJ, et al. 2021 Canadian
                  Cardiovascular Society Guidelines for the Management of
                  Dyslipidemia for the Prevention of Cardiovascular Disease in
                  Adults.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1016/j.pcad.2018.05.004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chiavaroli L, Nishi SK, Khan TA, et al. Portfolio Dietary
                  Pattern and Cardiovascular Disease: A Systematic Review and
                  Meta-analysis of Controlled Trials.
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
