import React from 'react'
import "../Assets/css/App.css"
import "../Assets/css/sponsor.css"
import { Link } from "react-router-dom"

import 'aos/dist/aos.css';
import {
  C1, C2, C3,C4,
  Dost, genlTeam, granna, hum, ibm, kualitatem, lptp, mic, poster, social, tag, topcity, toyota, uworlx, microsoft, virtualforce, pseb,LiasonPackage, C5
} from "./Images"
import OwlCarousel from "react-owl-carousel";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Sponsor from "./Sponsor"

import { Helmet } from 'react-helmet';

function Home() {

    return (
      <div >
          <Helmet >
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter</title>
          <meta name="description" content="ACM is a world wide professional organization devoted to advancing the theory and practice of computer science. Its student chapter at GIK is involved in activities ranging from arranging students workshops, special courses and introductory seminars to holding software and computer games competitions. "/>

        </Helmet>
{/*         
        <Carousel  infiniteLoop autoplay={true} interval={200} showThumbs={false} showIndicators={false} showStatus={false} > */}
                    <OwlCarousel  className="owl-theme" lazyLoad={1} autoplayHoverPause={0} items={1} loop autoplay={1} autoplayTimeout={2500} dots={0} height={"10"} >
                    {/* <div style={{marginTop:"5%", width: '100%'}}  > */}
                     {/* <LazyLoadImage  src={C4}/>
                   
                   </div>       */}
          {/* <div style={{marginTop:"5%",width: '100%', height: '10'}}  > */}
                     <img src={C1} className="Cimages" />
          {/* <img  src={C3} className="Cimages"/> */}
          <img  src={C4} className="Cimages"  alt=""/>  
                    <img  src={C5} className="Cimages" alt="" />
                                      
                    <img  src={C2} className="Cimages"/>
                   
                    
                
          {/* </Carousel> */}
          </OwlCarousel>
            
        <br />
        
        <div  className="container" data-aos="zoom-in">
          <div className="row justify-content-md-center">
            <div className="col shadow col-lg-4" id="NAU">
              <div className="head">
                <h4>NEWS AND UPDATES</h4>
              </div>
              <hr />
              <ul className="news" data-aos="zoom-in" >
              
                <li>ICPC Asia Topi Regional Registration Ends on: <span className="date">Closed</span></li>
                <li>ICPC Asia Topi Regional Online Contest on <span className="date">25-26 January 2022</span></li>
                <li>ICPC Asia Topi Regional Registrations Opened <Link id="ATT" to="/participant">Click here to register</Link></li>
              </ul>
            </div>
            <div className="space1" />
            <div className="col shadow overflow-auto col-lg-6 Upcom" data-aos="zoom-in"  id="NAU upcom">
              <div className="head ">
                <h4>ABOUT THE UPCOMING EVENT</h4>
              </div>
              <hr />
              <p className="lead1">The ACM International Collegiate Programming Contest (ICPC) is Link multi team-based, programming
                competition. The ACM ICPC is considered as the "Olympics of Programming Competitions". It is quite simply, the
                oldest, largest, and most prestigious programming contest in the world.</p>
              <hr />
              <p className="lead1">This gathering of intelligent and motivated engineering
                students has always been the source of giving birth to innovative ideas, immaculate solutions and immense sense
                of positive competition. In 3 days filled with fun, enjoyment, thrill and competition, students have an
                experience of life-time that is worth remembering for them.
                But due to the ongoing sitaution of our Country, the competition is divded into two phases;
                1. Preliminary Online ICPC
                2. Onsite ICPC (for top 50 teams in Online Contest </p>
            </div>
          </div>
        </div>
        
        <br /><br /><br />
        <div  className="container module-header" data-aos="zoom-in">
          <h2>MODULES</h2>
          <br />
          <div className="row">
            <div className="col shadow" id="modules">
              <div className="head2">
                <p>
                  STARTUP<img src={mic} id="mic" alt="" width="30px;" />
                </p>
              </div>
              <p className="lead2">
                Want to hear the secrets for industry, or latest technology? We are
                inviting the most talented people from all over Pakistan to deliver
                lectures on the technology.
              </p>
              <Link to="/softcom#startup"><div type="button" className="btn btn-primary">Read More</div></Link>
            </div>
            <div className="space2" />
            <div className="col shadow" id="modules">
              <div className="head2">
                <p>
                  ICPC<img src={tag} id="mic" alt="" width="30px;" />
                </p>
              </div>
              <p className="lead2">
                While most are dreaming of success, winners wake-up and work hard to
                achieve it.” This competition provides the students to believe in
                their programming skills.
              </p>
              <Link to="/softcom#icpc"><div type="button" className="btn btn-primary">Read More</div></Link>
            </div>
            <div className="space2" />
            <div className="col shadow" id="modules">
              <div className="head2">
                <p>
                  HACKATHON<img src={lptp} id="mic" alt="" width="30px;" />
                </p>
              </div>
              <p className="lead2">
                It is an event in which computer programmers and others, including
                graphic designers, interface designers and project managers,
                collaborate intensively on software projects.
              </p>
              <Link to="/softcom#hackathon"><div type="button" className="btn btn-primary">Read More</div></Link>
            </div>
            <div className="space2" />
            <div className="col shadow" id="modules">
              <div className="head2">
                <p className="pos">
                POSTER DESIGN<img src={poster} id="mic" alt="" width="30px;" />
                </p><p />
                <p />
              </div>
              <p className="lead2">
                Creativity can’t be possessed by studying, it is something you are
                naturally born with and often this feature captivates you in such Link
                way that it often becomes your reorganization.
              </p>
              <Link to="/softcom#poster"><div type="button" className="btn btn-primary">Read More</div></Link>
            </div>
          </div>
        </div>
        <br /><br /><br />
        <div  className="container" data-aos="zoom-in">
          <h2>SOCIAL EVENTS</h2>
          <br />
          <div style={{border: 'none !important'}} className="card">
            
            <img   src={social} className="card-img-top" alt="..." />
          </div>
        </div>
        <br /><br /><br />
        <div  className="container" data-aos="zoom-in" >
          <h2>SPONSORSHIP PACKAGE</h2>
          <br />
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading"><h4>PLATINUM</h4></div>
                <br /><br />
                <div className="panel-body">
                  <p className="lead-sp text-center">Naming Rights on Main Flex</p>
                  <p className="lead-sp text-center">
                    Name and Logo on T-Shirts/Hoodies
                  </p>
                  <p className="lead-sp text-center">E-Marketing Promotions</p>
                  <p className="lead-sp text-center">On-Campus Poster and Standees</p>
                  <p className="lead-sp text-center">Desk Setup, Company Brouchers</p>
                </div>
                <br />
                <div className="panel-footer">
                  <h3>600,000 PKR</h3>
                  <p className="lead-sp text-center">Multi-National Companies</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading"><h4>GOLD</h4></div>
                <br /><br />
                <div className="panel-body">
                  <p className="lead-sp text-center">
                    Name and Logo on Certificates and Shields
                  </p>
                  <p className="lead-sp text-center">E-Marketing Promotions</p>
                  <p className="lead-sp text-center">On-Campus Poster and Standees</p>
                  <p className="lead-sp text-center">Desk Setup, Company Brouchers</p>
                  <p className="lead-sp text-center">--</p>
                </div>
                <br />
                <div className="panel-footer">
                  <h3>400,000 PKR</h3>
                  <p className="lead-sp text-center">Business Package</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="panel panel-default text-center">
                <div className="panel-heading"><h4>SILVER</h4></div>
                <br /><br />
                <div className="panel-body">
                  <p className="lead-sp text-center">On-Campus Poster and Standees</p>
                  <p className="lead-sp text-center">E-Marketing Promotions</p>
                  <p className="lead-sp text-center">Four VIP Passes</p>
                  <p className="lead-sp text-center">
                    Name and Logo on Liaison Package
                  </p>
                  <p className="lead-sp text-center">--</p>
                </div>
                <br />
                <div className="panel-footer">
                  <h3>250,000 PKR</h3>
                  <p className="lead-sp text-center">Startups</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p className="lead-sp text-center">
            <a id="ATT" href={LiasonPackage} download >Download Sponsorship Package</a>
          </p>
        </div>
        <br /><br /><br />
        {/*ACM Sponsors slick carousel*/}

<h2 className="container module-header" style={{paddingBottom:"20px"}}>Our Sponsors</h2>
        
        <br /><br />
        <div className="container" data-aos="zoom-in" >
        <OwlCarousel  className="owl-theme" lazyLoad={1}  items={3.75} loop autoplay={1} autoplayTimeout={1500} autoplayHoverPause={0} dots={0} >
          
          <Sponsor image={hum} />
          <Sponsor image={ibm} />
          <Sponsor image={Dost} />
          <Sponsor image={genlTeam} />
          <Sponsor image={granna} />
          <Sponsor image={kualitatem} />
          <Sponsor image={topcity} />
          <Sponsor image={toyota} />
          <Sponsor image={uworlx}/>
          <Sponsor image={microsoft}/>
          <Sponsor image={virtualforce} />
          <Sponsor image={pseb}/>
        
          </OwlCarousel>
          </div>
        </div>
    )
}

export default Home
