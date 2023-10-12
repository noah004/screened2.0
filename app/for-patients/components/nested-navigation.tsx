"use client";
import "../../../public/styles/styles.css";
import { useEffect, useRef, useState } from "react";
import ScrollTopButton from "../../components/scroll-top-button";

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
  const [windowWidth, setWindowWidth] = useState(500);
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
              refs.current.cervical = element!;
            }}
            id={"Breast Cancer"}
          >
            <h1>Breast Cancer</h1>
            <p>
              Breast cancer is the most common cancer in women. 1 in 8 women in
              Canada are estimated to be diagnosed in their lifetime.
              <sup>1</sup> Certain factors can predispose women to breast
              cancer. This includes advancing age, certain genetic mutations,
              having family members with breast cancer, previous radiation
              therapy to the chest, and early menstruation or late menopause.
              Fat tissue can increase the amount of estrogen circulating in your
              body, which has been associated with an increased risk of breast
              cancer.
            </p>
            <p>
              Certain lifestyle factors can also increase the risk of breast
              cancer. This includes smoking, sedentary behavior, drinking
              alcohol and obesity. Speak to your healthcare provider if you
              would like help with mitigating these risk factors.<sup>2</sup>
            </p>
            <p>
              The screening test for breast cancer is a mammogram, which is an
              X-Ray photo of the breast. These images can detect early stages of
              breast cancer before any symptoms start which can allow for early
              initiation of treatment. In general, it is recommended to undergo
              a mammogram between ages 50 to 74 every 2-3 years. However, this
              may be different depending on your risk factors.
            </p>
            <p>
              Undergoing screening is an individualized choice based on
              what&apos;s important to you. Speak to your health care provider
              if you would like to know more about the potential harms about
              screening for breast cancer, such as unwanted further tests or
              treatments. To prepare yourself for your test, do not wear any
              products on your body including deodorant, perfume or powders.
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://cancer.ca/en/cancer-information/cancer-types/breast/statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lee S. Breast cancer statistics. Canadian Cancer Society.
                  Published May 2022. Accessed September 3, 2023.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.cdc.gov/cancer/breast/basic_info/risk_factors.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDCBreastCancer. What Are the Risk Factors for Breast Cancer?
                  Centers for Disease Control and Prevention. Published July 31,
                  2023. Accessed September 3, 2023.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.breast = element!;
            }}
            id="Cervical Cancer"
          >
            <h1>Cervical Cancer</h1>
            <p>
              Cervical cancer represents 1.3% of all new female cancers
              <sup>1</sup>. Cervical cancer is mainly caused by certain types of
              human papillomavirus (HPV), which is transmitted through sexual
              activity. Other risk factors include: having multiple sexual
              partners, early onset of sexual activity, being immunosuppressed
              and cigarette smoking<sup>2</sup>.
            </p>
            <p>
              Pap tests are done to visualize the cervix and obtain a sample to
              undergo analysis. This is done by a healthcare provider using a
              speculum. Results from this test can be normal or can show varying
              degrees of abnormality. Based on the result and your age, you may
              be asked to repeat the pap test, do an HPV test or undergo
              colposcopy. Detection can lead to early treatment, which has the
              ability to prevent cervical cancer from developing.
            </p>
            <p>
              It is recommended to undergo a pap test between ages 21-69 every
              2-3 years. This can be delayed if not yet sexually active at age
              21. Screening can be stopped at age 65 if the last 2 consecutive
              pap tests in the past 10 years have been negative.
            </p>
            <p>
              Pap tests may be uncomfortable however they should generally not
              be painful. In order to prepare yourself, avoid going when you
              have your period as this may lead to inaccurate results. In the 48
              hours before the test, do not insert any products in your vagina.
              Avoid penetrative sexual activity in the 24 hours before your
              test.
              <sup>3</sup>
            </p>
            <p>
              In Canada, it is recommended to get the HPV Vaccine (Gardasil) in
              order to help prevent infection by certain strains of HPV which
              may reduce your risk of cervical cancer. Using barrier protection
              (such as condoms) during intercourse is an important way to help
              reduce the risk of HPV infection.
            </p>
            <p>
              Using barrier protection (such as condoms) during intercourse is
              an important way to help reduce the risk of HPV infection.
            </p>
            <p>
              People who smoke are twice as likely to develop cervical cancer
              than those who don&apos;t smoke. Speak to your health care
              professional about smoking cessation or visit{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobaco-Free Quebec
              </a>{" "}
              to help you quit.
              <sup>4</sup>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/chronic-diseases/cancer/cervical-cancer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada PHA of. Cervical Cancer. Published March 2, 2009.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.cancer.org/cancer/types/cervical-cancer/causes-risks-prevention/risk-factors.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cervical Cancer Risk Factors | Risk Factors for Cervical
                  Cancer.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://cancer.ca/en/cancer-information/find-cancer-early/get-screened-for-cervical-cancer/everything-you-ever-wanted-to-know-about-having-a-pap-test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lee S. Everything you ever wanted to know about the Pap test.
                  Canadian Cancer Society.{" "}
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.tobaccofreequebec.ca/iquitnow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Quit Now - Tobacco-Free Quebec.
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
              In 2022, 24,300 Canadians were diagnosed with colorectal cancer in
              Canada.<sup>1</sup> Screening can identify precancerous lesions
              and when removed can reduce progression to cancer. Most people
              with colorectal cancer have no family history.
            </p>
            <p>
              The FIT test is a stool test that checks for the presence of blood
              in stool. Alternatively, you may be asked to undergo a flexible
              sigmoidoscopy. Similar to a colonoscopy, this is a procedure where
              a camera is inserted through the rectum to view the colon and
              rectum.
            </p>
            <p>
              People aged 50-74 can either undergo a FIT test every 2 years or a
              sigmoidoscopy every 10 years. If you have other risk factors or
              family members with a history of colorectal cancer diagnosed at a
              certain age, screening may need to begin earlier and be done more
              frequently.
            </p>
            <p>
              For the FIT test, you will need to collect a small sample of your
              stool using a collection kit which can be found at a testing
              center. Once you have collected the sample, you will need to
              return it to the testing center.
            </p>
            <p>
              For the sigmoidoscopy, your healthcare provider will prescribe
              laxatives that you will need to start taking the day prior which
              will help empty your bowels in preparation for the test.
            </p>
            <p>
              Colorectal cancer has been linked to increased alcohol
              consumption, obesity, smoking, lack of physical activity. It is
              recommended to consume a healthy diet with whole grains, fruits,
              vegetables and limit the amount of red and processed meats.
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://cancer.ca/en/cancer-information/cancer-types/colorectal/statistics"
                  target="_blank"
                  rel="noopener norefeerer"
                >
                  Lee S. Colorectal cancer statistics. Canadian Cancer Society.
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
              In 2022, 30 000 Canadians were diagnosed with lung and bronchus
              cancer.<sup>1</sup> Most people with lung cancer will not have
              symptoms for the first several years. It is usually diagnosed at a
              more advanced stage.
            </p>
            <p>
              Currently, there are no official screening recommendations for
              lung cancer in Quebec. However, in 2021, Quebec initiated a lung
              cancer screening demonstration project.<sup>2</sup> It offers a
              low dose CT for people at high risk for developing lung cancer.
              This includes: people between the ages of 55-74 who have either
              smoked on or off for at least 20 years or smoked on or off for at
              least 20 years and quit less than 15 years ago.
            </p>
            <p>
              If you do not have a healthcare provider, you can email{" "}
              <a
                style={{
                  color: "black",
                }}
                href="mailto:depistagecancerpoumon@ssss.gouv.ca"
              >
                depistagecancerpoumon@ssss.gouv.ca
              </a>{" "}
              or call{" "}
              <a style={{ color: "black" }} href="tel:18446564312">
                1-844-656-4312
              </a>
              , to find out if you are eligible for the project.
            </p>
            <p>
              Cigarette smoking is the leading risk factor for lung cancer.
              Quitting at any age can lower this risk. Please visit{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobaco-Free Quebec
              </a>{" "}
              if you would like support to quit smoking.
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="cancer.ca/en/cancer-information/cancer-types/lung/statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lee, Sid. “Lung and Bronchus Cancer Statistics.” Canadian
                  Cancer Society.
                </a>
              </li>
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
              It is estimated that over 3 million Canadians have been diagnosed
              with diabetes, making it one of the most common chronic health
              conditions.<sup>1</sup> Type two diabetes may be driven by
              multiple factors, such as unhealthy eating, lack of physical
              activity, smoking, and various determinants of health related to
              socioeconomic status and living environment.<sup>2,3</sup>{" "}
              Furthermore, 6.1% of Canadians aged 20-79 have prediabetes, which
              puts them at a higher risk of developing type 2 diabetes in the
              future.<sup>1</sup>
            </p>
            <p>
              Uncontrolled sugar levels can affect both the big and small blood
              vessels in the body. If left untreated, this can lead to
              devastating effects such as heart disease, kidney failure, stroke,
              blindness amongst others.<sup>4</sup>
            </p>
            <p>
              Screening for type 2 diabetes involves taking a blood test which
              measures the glucose in the blood, or the hemoglobin A1C, another
              glucose test that acts a proxy for the average glucose level in
              the last three months. From ages 18 and up, using the CANRISK
              questionnaire, you will be able to continue assessing your risk of
              developing diabetes.<sup>5</sup>
            </p>
            <p>
              Before coming to the test, ask your healthcare professional if you
              will be needing to fast. If so, the recommendation is to avoid
              eating or drinking anything aside from water 8 hours before your
              test.<sup>6</sup>
            </p>
            <p>
              Developing type 2 diabetes is influenced by many factors, but
              there are many things you can do to decrease your risk. One
              important thing to consider is maintaining a healthy weight. It is
              encouraged to discuss with your healthcare provider what is a
              healthy weight for you. You may visit the{" "}
              <a
                className="purple"
                href="https://food-guide.canada.ca/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Canadian Food Guide
              </a>{" "}
              for more information about recommendations.<sup>6</sup> It is
              recommended to include 150 minutes of moderate physical activity
              per week, such as brisk walking.<sup>8</sup> Smoking cessation is
              also an important factor in preventing the development of type 2
              diabetes. Please discuss with your healthcare provider for more
              information and guidance.<sup>9</sup>
            </p>
            <p>
              You can visit{" "}
              <a
                className="purple"
                href="https://guidelines.diabetes.ca/patient-resources"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diabetes Canada
              </a>{" "}
              for more information.
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/publications/diseases-conditions/framework-diabetes-canada.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada PHA of. Framework for diabetes in Canada.
                </a>{" "}
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1016/j.jcjd.2019.09.001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yaghoubi M, Mansell K, Vatanparast H, Steeves M, Zeng W, Farag
                  M. Prevalence of Type 1 and Type 2 Diabetes-Related
                  Complications and Their Association With Determinants
                  Identified in Canada&apos;s Survey on Living With Chronic
                  Diseases—Diabetes Component. Can J Diabetes.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1007/s11892-017-0885-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Butler AM. Social Determinants of Health and Racial/Ethnic
                  Disparities in Type 2 Diabetes in Youth. Curr Diab Rep.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.7150/ijms.10001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wu Y, Ding Y, Tanaka Y, Zhang W. Risk Factors Contributing to
                  Type 2 Diabetes and Recent Advances in the Treatment and
                  Prevention.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/tools-resources/type-2-diabetes-2/type-2-diabetes-canrisk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Diabetes, Type 2—CANRISK – Canadian Task Force on Preventive
                  Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://myhealth.alberta.ca:443/Health/aftercareinformation/pages/conditions.aspx?hwid=ad1603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blood Glucose: About This Test.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://food-guide.canada.ca/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada H. Welcome to Canada’s food guide.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1056/nejmoa012512"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reduction in the Incidence of Type 2 Diabetes with Lifestyle
                  Intervention or Metformin.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/chronic-diseases/diabetes/prevent-type-2-diabetes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada PHA of. How To Prevent Type 2 Diabetes.
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
              Approximately 19% of all Canadian adults have high blood pressure.
              <sup>1</sup> High blood pressure increases the amount of work that
              the heart needs to exert in order to pump blood to the entire
              body. This can cause the heart to become damaged. It can also
              cause damage to the arteries, leading to complications such as
              tears, hardening or bulging. It can also increase the risk of
              stroke, dementia, blindness and heart attack.<sup>2</sup>
            </p>
            <p>
              High blood pressure can be due to a variety of factors. Some of
              the risk factors are not within our control such as sex,
              ethnicity, gender and a family history of hypertension, whereas
              others factors that we will describe below can be addressed
              through lifestyle changes to reduce your risk. In order to
              mitigate these effects, it is important to check and understand
              your blood pressure.<sup>3</sup>
            </p>
            <p>
              Blood pressure is written as two separate numbers: The first is
              systolic pressure which represents the pressure in the blood
              pressure when the heart beats. The diastolic pressure, which is
              the second number, is the pressure of the heart at rest.
              <sup>4</sup>
            </p>
            <p>
              The Canadian task force recommends that blood pressure should be
              checked at all appropriate primary health care visits for
              individuals above 18 years of age.<sup>5</sup> Following the
              reading, your healthcare provider will be able to assess whether
              you are at risk for hypertension and this may be followed with at
              home blood pressure monitoring.<sup>6</sup>
            </p>
            <p>
              Before taking your blood pressure, your healthcare provider will
              position you in the appropriate placement to allow for the most
              accurate read. During this time, it is important to not talk or
              move prior to the measurement, keep legs uncrossed and feet flat
              on the floor. Based on your blood pressure measurements, you may
              be asked to continue monitoring blood pressure at home. You may be
              asked to wear a device that will monitor your blood pressure over
              24 hours. Otherwise, you may be asked to monitor your own blood
              pressure with a device or at your local pharmacy, and then monitor
              the values with a diary. For more information about how to take at
              home blood pressure measurements, and for an associated guide,
              please click{" "}
              <a
                className="purple"
                href="https://guidelines.hypertension.ca/wp-content/uploads/2023/03/HTC_BloodPressureLog_ENG_FILLABLE.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              To decrease the risk of hypertension or reverse its effects, there
              are many steps you can take. Engaging in regular physical
              activity, maintaining a healthy body weight, and reducing alcohol
              consumption are recommended. Please speak with your healthcare
              provider to discuss a good weight to maintain. Additionally, there
              are various diets that have been shown to decrease the risk of
              hypertension. The DASH diet, designed specifically for individuals
              with high blood pressure, may be an interesting choice.
              Furthermore, limiting sodium intake to around 2 grams per day is
              strongly encouraged. For reference, a teaspoon of salt contains
              around 2.3 grams of sodium.<sup>6</sup>
            </p>
            <b>Additional Resources:</b>
            <ul>
              <li>
                <a
                  className="purple"
                  href="https://guidelines.hypertension.ca/wp-content/uploads/2022/09/HTC_Brochure_BPActionPlan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blood Pressure Action Plan
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.mountsinai.on.ca/care/fammed/patient-resources/hypertension/hypertension-brochure-blood-pressure-canada.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Managing Your Blood Pressure
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.nhlbi.nih.gov/education/dash-eating-plan#:~:text=The%20DASH%20eating%20plan%20requires,beans%2C%20nuts%2C%20and%20vegetable%20oils"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Description of the DASH Eating Plan
                </a>
              </li>
            </ul>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/hypertension-clinician-summary/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hypertension—Clinician Summary - Canadian Task Force on
                  Preventive Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/diseases/heart-health/high-blood-pressure/health-effects-high-blood-pressure.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada PHA of. Health effects of high blood pressure.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.heartandstroke.ca/en/heart-disease/risk-and-prevention/condition-risk-factors/high-blood-pressure/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  High blood pressure. Heart and Stroke Foundation of Canada.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Understanding Blood Pressure Readings.
                </a>
              </li>
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
              The abdominal aorta is the main blood vessel in the body that
              connects to the heart. An Abdominal Aortic Aneurysm (AAA) is a
              condition where a portion of the vessel becomes enlarged. If not
              caught early on, it has the potential to get larger and may lead
              to rupture, which comes with a risk of life-threatening bleeding.
              <sup>1</sup> The Canadian task force recommends that men 65 to 80
              years of age have a one-time screening for AAA with an ultrasound
              to reduce the risk of AAA negative events<sup>2</sup>.
            </p>
            <p>
              In addition to screening, taking steps to protect yourself from
              developing an abdominal aortic aneurysm is crucial. There are
              various things that you can do to help decrease your risk of
              developing an AAA or reduce its growth. There are certain steps
              you can take to help reduce your risk such as cutting down and
              ultimately quitting tobacco smoking, which has been shown to play
              a big role in the development of AAA.<sup>3</sup> Please visit{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobacco-Free Quebec
              </a>{" "}
              if you would like support to quit smoking.<sup>4</sup>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://www.nhs.uk/conditions/abdominal-aortic-aneurysm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abdominal aortic aneurysm. nhs.uk.
                </a>
              </li>
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
                  href="https://doi.org/10.1001/archinte.160.10.1425"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lederle FA. The Aneurysm Detection and Management Study
                  Screening Program: Validation Cohort and Final Results.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.tobaccofreequebec.ca/iquitnow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Quit Now - Tobacco-Free Quebec.
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
              Osteoporosis is a common condition impacting more than 2.3 million
              Canadians.<sup>1</sup> It is characterized by a decrease in bone
              density, which renders the bones fragile and susceptible to
              fractures even with minimal force or trauma, known as fragility
              fractures.<sup>1,2</sup>
            </p>
            <p>
              Older age, being of the female sex, white race, prolonged
              immobility, and long use of corticosteroids are known to increase
              risk of osteoporosis.<sup>3</sup> For individuals aged 50 years or
              older, over 80% of all fractures are due to osteoporosis.
              <sup>1</sup>
            </p>
            <p>
              Different methods are available to evaluate your risk of fragility
              fractures. Two complementary screening approaches include the FRAX
              score and a Bone Mineral Density (BMD) test. The most common test
              that measures BMD is the dual energy x-ray absorptiometry (DXA),
              and involves lying flat on a table for several minutes while an
              x-ray scans your spine or hip(s).<sup>4</sup> It&apos;s important
              to note that screening for fragility fractures carries the
              potential for overdiagnosis and adverse effects from treatment.
            </p>
            <p>
              The Canadian task force recommends screening starting at the age
              of 65. It is recommended to use the risk assessment tool known as
              FRAX as an initial tool to estimate the risk of a fracture.
              <sup>5</sup> After assessing your risk, you may be offered further
              tests such as undergoing a BMD test.<sup>2</sup>
            </p>
            <p>
              It is important to tell your doctor if you had a recent exam with
              contrast (such as a CT or nuclear medicine test), as it may
              interfere with the imaging.<sup>6</sup>
            </p>
            <p>
              Engaging in exercise that involves weight-bearing and resistance
              exercises helps maintain the strength of your bones. These
              exercises can include walking, jogging, weightlifting, or using
              resistance bands. working on balance. Activities like Yoga and Tai
              chi are known to improve balance and stability. A diet rich in
              calcium is important to ensure good bone health. This includes
              dairy products or fortified plant based milk.<sup>7</sup> Vitamin
              D supplementation is recommended for all Canadian adults.
              <sup>8</sup> Smoking has been shown to have negative effects on
              the skeletal system, and is a risk factor for developing
              osteoporosis.<sup>9</sup>
            </p>
            <p>
              Quitting at any age can lower this risk. Please visit{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobaco-Free Quebec
              </a>{" "}
              if you would like support to quit smoking.<sup>10</sup>
            </p>
            <b>Additional Resources:</b>
            <ul>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/health-promotion/healthy-living/physical-activity/physical-activity-tips-adults-18-64-years.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada&apos;s Physical Activity guides
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="http://www.osteoporosis.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Osteoporosis Canada
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://osteoporosis.ca/calcium/#:~:text=Adults%20between%2019%2D50%20years,Rich%20Foods%20for%20some%20inspiration."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Osteoporosis Canada: Calcium
                </a>
              </li>
            </ul>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://osteoporosis.ca/facts-and-stats/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facts and Stats | Osteoporosis Canada.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://canadiantaskforce.ca/guidelines/published-guidelines/fragility-fractures/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fragility Fractures (2023) – Canadian Task Force on Preventive
                  Health Care.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="http://www.ncbi.nlm.nih.gov/pmc/articles/pmc1580372/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kelsey JL. Risk factors for osteoporosis and associated
                  fractures.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://osteoporosis.ca/bone-mineral-density-testing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bone Mineral Density Testing | Osteoporosis Canada.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://frax.shef.ac.uk/FRAX/tool.aspx?country=9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FRAX ®Fracture Risk Assessment Tool.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.mayoclinic.org/tests-procedures/bone-density-test/about/pac-20385273"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bone density test - Mayo Clinic.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.canada.ca/en/public-health/services/chronic-diseases/osteoporosis.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada PHA of. Osteoporosis.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.osteoporosis.ca/vitamin-d/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vitamin D: Osteoporosis Canada.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1155/2018/1206235"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Al-Bashaireh AM, Haddad LG, Weaver M, Chengguo X, Kelly DL,
                  Yoon S. The Effect of Tobacco Smoking on Bone Mass: An
                  Overview of Pathophysiologic Mechanisms.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.tobaccofreequebec.ca/iquitnow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Quit Now - Tobacco-Free Quebec.
                </a>
              </li>
            </ol>
          </div>
          <div
            ref={(element) => {
              refs.current.dyslipidemia = element!;
            }}
            id="Dyslipidemia"
          >
            <h1>Dyslipidemia</h1>
            <p>
              Lipids are fats which are stored in the body and are used as a
              source of energy. They include the following: HDL (otherwise known
              as the &quot;good&quot; cholesterol), LDL (otherwise known as the
              &quot;bad&quot; cholesterol), and triglycerides.<sup>1</sup>{" "}
              Dyslipidemia is a condition in which there are abnormal levels of
              lipids in the body. This increases the risk of heart attack,
              stroke and other conditions.<sup>2</sup>
            </p>
            <p>
              Dyslipidemia is quite a prevalent condition in Canada, with data
              collected from 2007-2009 indicating that 45% of Canadian adults
              have dyslipidemia, 57% of which are unaware of it.<sup>3</sup>{" "}
              Though it has a strong link with increasing your risk of adverse
              cardiac events such as heart attack, it is a risk factor that may
              be modified with certain lifestyle changes.<sup>4</sup> The 2021
              Canadian Cardiovascular Society Guidelines recommends screening
              for cholesterol for men and women above the age of forty, or at
              any age if you have a criteria which puts you at higher risk for
              elevated cholesterol. Examples include family history of cardiac
              events at an early age or history of dyslipidemia, obesity,
              diabetes, amongst others.<sup>5</sup> It is important to discuss
              with your healthcare professional if you meet criteria for
              testing.
            </p>
            <p>
              You will take a blood test which will look at your lipid levels.
              If your doctor tells you to fast before your test, do not eat or
              drink anything except water for 9 to 12 hours before having your
              blood drawn, and avoid alcohol consumption or vigorous exercise.
              <sup>6</sup>
            </p>
            <p>
              In addition to screening, there are other steps that you can do to
              decrease the rate of cholesterol in the body. It is recommended to
              get at least 150 minutes of moderate to vigorous aerobic activity
              per week, and to add muscle and bone strength activities at least
              2 days per week.<sup>7</sup> Maintaining a healthy diet is an
              important factor that can reduce your risk.<sup>5</sup> Quitting
              smoking at any age can lower the risk of cardiac events. Please
              visit{" "}
              <a
                className="purple"
                href="https://www.tobaccofreequebec.ca/iquitnow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tobaco-Free Quebec
              </a>{" "}
              if you would like support to quit smoking.<sup>8</sup>
            </p>
            <h3>Bibliography</h3>
            <ol>
              <li>
                <a
                  className="purple"
                  href="https://www.cdc.gov/cholesterol/ldl_hdl.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC. LDL and HDL Cholesterol and Triglycerides | cdc.gov.
                  Centers for Disease Control and Prevention.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.7326/aitc201712050"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kopin L, Lowenstein CJ. Dyslipidemia.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.17269/cjph.104.3783"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Joffres M, Shields M, Tremblay MS, Gorber SC. Dyslipidemia
                  Prevalence, Treatment, Control, and Awareness in the Canadian
                  Health Measures Survey.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1007/s11745-010-3408-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Musunuru K. Atherogenic Dyslipidemia: Cardiovascular Risk and
                  Dietary Intervention.
                </a>
              </li>
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
                  href="https://myhealth.alberta.ca:443/Health/Pages/conditions.aspx?hwid=tr6155"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lipid Panel.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://doi.org/10.1001/archinte.167.10.999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kodama S. Effect of Aerobic Exercise Training on Serum Levels
                  of High-Density Lipoprotein Cholesterol: A Meta-analysis.
                </a>
              </li>
              <li>
                <a
                  className="purple"
                  href="https://www.tobaccofreequebec.ca/iquitnow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I Quit Now - Tobacco-Free Quebec.
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
