import React from 'react'

import {
  di, GS, SA, VP, P, ECS, ECI, Tresurer, DT, DS, DL,
  // head4, head5, head6, head7, head8,
  DP
} from "./Images"
import { Link, Outlet } from 'react-router-dom'
import Team from './Team'
import "../Assets/css/team.css"
import { Helmet } from 'react-helmet'
import T30 from "./T30"
import ScrollToTop from "react-scroll-to-top";



function EC() {
  return (
     <>
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
            </>
  )
}

export default EC