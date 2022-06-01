import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Team from './Team'
import "../Assets/css/team.css"
import { Helmet } from 'react-helmet'
import T30 from "./T30"
import ScrollToTop from "react-scroll-to-top";
import {
  di, GS, SA, VP, P, ECS, ECI, Tresurer, DT, DS, DL,
  // head4, head5, head6, head7, head8,
  DP
} from "./Images"

function Heads() {
  return (
   <>
           <div className="container">
                <h2 style={{textAlign: 'center'}}>BATCH 30</h2>
                  <div className="row justify-content-md-center" id="mem-row">
                 
                    <T30 API={"/members"}/>
                   
                 
                </div>
              </div>
                
            </>
  )
}

export default Heads