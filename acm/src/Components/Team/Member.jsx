
import React from 'react'


import "./team.css"
import { Helmet } from 'react-helmet'
import T30 from "./T30"
import ScrollToTop from "react-scroll-to-top";





function Member() {

    return (
      <div id="member">
        <ScrollToTop smooth color="#6f00ff" />
        <Helmet>
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter | OUR Team</title>
          <meta name="description" content=" ACM GIKI TEAM " />
          <meta
            name="viewport"
            content="width=device-width,  initial-scale=1.0 ,user-scalable=no"
          ></meta>
        </Helmet>

        <div>
          <div className="container">
            <h2>OUR TEAM</h2>
            <br />
            <navbar className="team">
              <div className="nav" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-EC"
                  role="tab"
                  aria-controls="nav-EC"
                  aria-selected="true"
                >
                  EXECUTIVE COUNCIL
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-H"
                  role="tab"
                  aria-controls="nav-H"
                  aria-selected="false"
                >
                  HEADS
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-SH"
                  role="tab"
                  aria-controls="nav-M"
                  aria-selected="false"
                >
                  SUBHEADS
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-M"
                  role="tab"
                  aria-controls="nav-M"
                  aria-selected="false"
                >
                  MEMBERS
                </a>
              </div>
            </navbar>
            <hr id="navline" />
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade"
                id="nav-EC"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="container">
                  <h2 style={{ textAlign: "center" }}>EC</h2>
                  <div
                    className="row justify-content-md-center"
                    style={{ height: "100%", width: "100%" }}
                    id="mem-row"
                  >
                    <T30 API={"/members29"} />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-H"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="container">
                  <h2 style={{ textAlign: "center" }}>BATCH 30</h2>
                  <div className="row justify-content-md-center" id="mem-row">
                    <T30 API={"/members"} />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-SH"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="container">
                  <h2 style={{ textAlign: "center" }}>BATCH 31</h2>
                  <div className="row justify-content-md-center" id="mem-row">
                    <T30 API={"/members31"} />
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-SH"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="container">
                  <h2 style={{ textAlign: "center" }}>BATCH 32</h2>
                  <div className="row justify-content-md-center" id="mem-row">
                    <T30 API={"/members31"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
}

export default Member