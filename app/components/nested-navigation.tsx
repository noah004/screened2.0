export default function NestedNavigation() {
  return (
    //The nested navigation
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 px-0">
          <nav
            id="navbar-example3"
            className="navbar navbar-expand-xl flex-column align-items-stretch ps-2 pt-3 border-end sticky-top overflow-auto"
          >
            <nav className="nav nav-pills flex-column">
              <a className="nav-link text-secondary-emphasis" href="#Cancers">
                <b>Cancers</b>
              </a>
              <nav className="nav nav-pills flex-column">
                <a
                  className="nav-link ms-3 my-1 text-secondary"
                  href="#Cervical Cancer"
                >
                  Cervical Cancer
                </a>
                <a
                  className="nav-link ms-3 my-1 text-secondary"
                  href="#Breast Cancer"
                >
                  Breast Cancer
                </a>
                <a
                  className="nav-link ms-3 my-1 text-secondary"
                  href="#Colorectal Cancer"
                >
                  Colorectal Cancer
                </a>
                <a
                  className="nav-link ms-3 my-1 text-secondary"
                  href="#Lung Cancer"
                >
                  Lung Cancer
                </a>
              </nav>
              <a
                className="nav-link my-1 text-secondary-emphasis"
                href="#Type Two Diabetes"
              >
                <b>Type Two Diabetes</b>
              </a>
              <a
                className="nav-link my-1 text-secondary-emphasis"
                href="#Hypertension"
              >
                <b>Hypertension</b>
              </a>
              <a
                className="nav-link my-1 text-secondary-emphasis"
                href="#Fragility Fractures"
              >
                <b>Fragility Fractures</b>
              </a>
              <a
                className="nav-link my-1 text-secondary-emphasis"
                href="#Abdominal Aortic Aneurysm"
              >
                <b>Abdominal Aortic Aneurysm</b>
              </a>
            </nav>
          </nav>
        </div>

        <div className="col-9">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2 h-100"
            tabIndex={0}
          >
            <div id="Cancers">
              <h1>Cancers</h1>
            </div>
            <div id="Cervical Cancer">
              <h3>Cervical Cancer</h3>
              <p>
                In 2022, 1450 women in Canada were diagnosed with cervical
                cancer. Cervical cancer is mainly caused by certain types of
                HPV. It is transmitted through sexual activity. Pap tests are
                done to visualize the cervix and obtain a sample to undergo
                analysis. Results from this test can be normal or can show
                varying degrees of abnormality. Based on the result, management
                can include repeating the pap test, doing an HPV test or
                procedures to remove the abnormal tissue. Detection can lead to
                early treatment, which has the ability to prevent cervical
                cancer from developing.
              </p>
              <p>
                It is recommended to undergo a pap test between ages 21-65 every
                2-3 years. This can be delayed if not yet sexually active at age
                21. Screening can be stopped at age 65 if the last 3 consecutive
                pap tests have been negative.
              </p>
              <p>
                Pap tests may be uncomfortable however they should not be
                painful. In order to prepare yourself, avoid going when you have
                your period as this may lead to inaccurate results. In the 48
                hours before the test, do not have sex or insert any products in
                your vagina. In Canada, it is recommended to get the HPV Vaccine
                (Gardasil) in order to help prevent infection by certain strains
                of HPV.
              </p>
              <p>
                People who smoke are twice as likely to develop cervical cancer
                than those who don’t smoke. Speak to your health care
                professional about smoking cessation or visit **HERE -
                hyperlink* on our page for resources to help you quit.
              </p>
            </div>
            <div id="Breast Cancer">
              <h3>Breast Cancer</h3>
              <p>
                Breast cancer is the most common cancer in women. 1 in 8 women
                in Canada are estimated to be diagnosed in their lifetime.
              </p>
              <p>
                The screening test for breast cancer is a mammogram, which is an
                X-Ray photo of the breast. These images can detect early stages
                of breast cancer before any symptoms start. In general, it is
                recommended to undergo a mammogram between ages 50 to 74 every
                2-3 years. However, this may be different depending on your risk
                factors.
              </p>
              <p>
                Speak to your health care provider if you are at higher risk for
                developing breast cancer. This includes: history of atypical
                breast biopsies, history of chest radiation or a genetic
                predisposition. Have a conversation with your healthcare
                provider if you would like to know more about the potential
                harms of screening for breast cancer.
              </p>
              <p>
                To prepare yourself for your test, do not wear any products on
                your body including deodorant, perfume or powders. Fat tissue
                can increase the amount of estrogen circulating in your body,
                which has been associated with an increased risk of breast
                cancer. Keeping a healthy weight and being physically active can
                help reduce your risk. Limiting alcohol consumption can also
                help reduce your risk.
              </p>
            </div>
            <div id="Colorectal Cancer">
              <h3>Colorectal Cancer</h3>
              <p>
                Colorectal cancer is a leading cause of death from cancer. The
                rates of new cases are declining partly due to an increase in
                screening. Screening can identify precancerous lesions and when
                removed can reduce progression to cancer. Most people with
                colorectal cancer have no family history.
              </p>
              <p>
                The FIT test is a stool test that checks for the presence of
                blood in stool. Alternatively, you may undergo a flexible
                sigmoidoscopy. Similar to a colonoscopy, this is a procedure
                where a camera is inserted through the rectum to view the colon
                and rectum.
              </p>
              <p>
                People aged 50-74 can either undergo a FIT test every 2 years or
                a sigmoidoscopy every 10 years. If you have other risk factors
                or family members with a history of colorectal cancer diagnosed
                at a certain age, screening may need to begin earlier and be
                done more frequently.
              </p>
              <p>
                For the FIT test, you will need to collect a small sample of
                your stool using a collection kit. Once you have collected the
                sample, you will need to return it to the testing centre.
              </p>
              <p>
                For the sigmoidoscopy, your healthcare provider will prescribe
                laxatives that you will need to start taking the day prior which
                will help empty out your bowels in preparation for the test.
              </p>
              <p>
                Colorectal cancer has been linked to increased alcohol
                consumption, obesity, smoking, lack of physical activity. It is
                recommended to consume a healthy diet with whole grains, fruits,
                vegetables and limit the amount of red and processed meats. *
                please click here for more information (hyperlink)
              </p>
            </div>
            <div id="Lung Cancer">
              <h3>Lung Cancer</h3>
              <p>
                Most people with lung cancer will not have symptoms for the
                first several years. It is usually diagnosed at a more advanced
                stage.
              </p>
              <p>
                Currently, there are no official screening recommendations for
                lung cancer in Quebec. However, in 2021, Quebec initiated a lung
                cancer screening demonstration project. It offers a low dose CT
                for people at high risk for developing lung cancer. This
                includes: people between the ages of 55-74 who have either
                smoked on or off for at least 20 years or smoked on or off for
                at least 20 years and quit less than 15 years ago.
              </p>
            </div>
            <div id="Type Two Diabetes">
              <h1>Type Two Diabetes</h1>
              <p>
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. repeated throughout the component example.
                We keep adding some more example copy here to emphasize the
                scrolling and highlighting. Keep in mind that the JavaScript
                plugin tries to pick the right element among all that may be
                visible. Multiple visible scrollspy targets at the same time may
                cause some issues.
              </p>
            </div>
            <div id="Hypertension">
              <h1>Hypertension</h1>
              <p></p>
            </div>
            <div id="Fragility Fractures">
              <h1>Fragility Fractures</h1>
              <p></p>
            </div>
            <div id="Abdominal Aortic Aneurysm">
              <h1>Abdominal Aortic Aneurysm</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
