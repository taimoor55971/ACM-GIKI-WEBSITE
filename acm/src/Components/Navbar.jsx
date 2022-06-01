import React from 'react'
import "../Assets/css/App.css"
import { Link } from 'react-router-dom'
import {acmlogonav} from "./Images"


function Navbar() {
 
  
    return (
        <div >

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mynav">
          {/* <a className id="logo navbar-brand" href></a> */}
          
          <Link class="navbar-brand" to="/">
            <img src={acmlogonav} width="180px" className="d-inline-block align-top" alt="" />
      
    </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link id="animate" className="nav-link " to="/">HOME<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link id="animate" className="nav-link" to="/about">ABOUT ACM</Link>
            </li>
            <li className="nav-item">
              <Link id="animate" className="nav-link" to="team">OUR TEAM</Link>
              </li>
               <li className="nav-item">
              <Link id="animate" className="nav-link" to="/developer's_cell">Developer's Cell</Link>
            </li>
            <li className="nav-item">
              <Link id="animate" className="nav-link" to="/softcom">SOFTCOM</Link>
            </li>
            <li className="nav-item">
              <Link id="animate" className="nav-link" to="/icpc">ICPC</Link>
            </li>
            <li className="nav-item">
              <Link id="animate" className="nav-link" to="/gallery">GALLERY</Link>
            </li>
            <li className="nav-item dropdown">
              <a id="noanimate" className="nav-link dropdown-toggle" href="//#region " data-toggle="dropdown">REGISTER</a>
              <div className="dropdown-menu">
                <Link id className="dropdown-item" to="/participant">Participant</Link>
                <Link id className="dropdown-item" to="/ambassador">Ambassador</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

        </div>
    )
}


export default Navbar