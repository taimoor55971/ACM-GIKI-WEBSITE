import React from 'react'
import {
  di, GS, SA, VP, P, ECS, ECI, Tresurer, DT, DS, DL, head1, head2, head3,
  // head4, head5, head6, head7, head8,
  DP
} from "./Images"
import Team from './Team'
import "../Assets/css/team.css"
import { Helmet } from 'react-helmet'
import T30 from "./T30"






function Member() {

    return (
      <div id="member">
         <Helmet >
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter | OUR Team</title>
          <meta name="description" content=" ACM GIKI TEAM " />
           <meta name="viewport" content="width=device-width,  initial-scale=1.0 ,user-scalable=no"></meta>
          <meta property="og:image" content={GS} />
        </Helmet>
         
  <div>
       
        <div className="container">
          <h2>OUR TEAM</h2>
          <br />
          <navbar className="team">
            <div className="nav" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-EC" role="tab" aria-controls="nav-EC" aria-selected="true">EXECUTIVE COUNCIL</a>
              <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-H" role="tab" aria-controls="nav-H" aria-selected="false">HEADS</a>
              <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-SH" role="tab" aria-controls="nav-M" aria-selected="false">SUBHEADS</a>
            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-M" role="tab" aria-controls="nav-M" aria-selected="false">MEMBERS</a>
              </div>
          </navbar>
          <hr id="navline" />
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-EC" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="container">
                <h2 style={{textAlign:"center"}}>EXECUTIVE COUNCIL</h2>
                <div className="row justify-content-md-center" id="mem-row">
                  <Team image={di}  />
                    <Team image={P} />
                     <Team image={SA} />
                    
                  
                </div>
              </div>
              <br />
              <div className="container">
                <div className="row justify-content-md-center" id="mem-row">
                  
                     <Team image={ECS}/>
                    <Team image={VP} />
                    <Team image={GS} />
                    <Team image={ECI} />
                 
                </div>
                <div className="row row-md-2" style={{margin:"20px 10% "}} id="mem-row">
                  
                 <Team image={DL} />
                    <Team image={DP}/>
                </div>
                <div className="row justify-content-md-center"  id="mem-row">
                  <Team image={Tresurer} />
                    <Team image={DT} />
                  <Team image={DS}/>
                    
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-H" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="container">
                <h2 style={{textAlign: 'center'}}>BATCH 29</h2>
                <div className="row justify-content-md-center" style={{height: '100%',width:"100%"}} id="mem-row">
                  
                 <Team image={head1}/>
                  <Team image={head2}/>
                  <Team image={head3}/>
                  
                  {/* <Team image={head4} />
                  <Team image={head5} />
                  <Team image={head6}/>
                  <Team image={head7} />
                  <Team image={head8} /> */}
                  </div>
                  
              </div>
            </div>
            <div className="tab-pane fade" id="nav-SH" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div className="container">
                <h2 style={{textAlign: 'center'}}>BATCH 30</h2>
                  <div className="row justify-content-md-center" id="mem-row">
                 
                  <T30/>
                 
                </div>
              </div>
              </div>
              
              <div className="tab-pane fade" id="nav-M" role="tabpanel" aria-labelledby="nav-contact-tab">
              <div className="container">
                <h2 style={{textAlign: 'center'}}>BATCH 31</h2>
                <div className="row justify-content-md-center" id="mem-row">
                  
                 
                </div>
              </div>
            </div>

          </div>
        </div>
        <br /><br />
       
        </div>
      
        </div>
           
    )
}

export default Member
