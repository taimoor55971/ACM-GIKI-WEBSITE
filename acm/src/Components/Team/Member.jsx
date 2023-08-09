import React from 'react';
import "./team.css";
import { Helmet } from 'react-helmet';
import ScrollToTop from "react-scroll-to-top";
import T30 from './T30';

function Member() {
  return (
    <div id="member">
      <ScrollToTop smooth color="#6f00ff" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>ACM_GIKI Chapter | OUR Team</title>
        <meta name="description" content="ACM GIKI TEAM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Helmet>
      <div className="container">
        <h2>OUR TEAM</h2>
        <br />
        <div className="team">
          <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#ec">EXECUTIVE COUNCIL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#heads">HEADS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#subheads">SUBHEADS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#members">MEMBERS</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="ec">
              <div className="container">
                <h2 className="text-center">EC</h2>
                <div className="row justify-content-center" id="mem-row">
                  <T30 API={"https://acm-giki-webapp.onrender.com/members29"} />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="heads">
              <div className="container">
                <h2 className="text-center">HEADS</h2>
                <div className="row justify-content-center" id="heads-row">
                  <T30 API={"https://acm-giki-webapp.onrender.com/members"} />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="subheads">
              <div className="container">
                <h2 className="text-center">SUBHEADS</h2>
                <div className="row justify-content-center" id="subheads-row">
                  <T30 API={"https://acm-giki-webapp.onrender.com/members31"} />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="members">
              <div className="container">
                <h2 className="text-center">MEMBERS</h2>
                <div className="row justify-content-center" id="members-row">
                  <T30 API={"https://acm-giki-webapp.onrender.com/members32"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
