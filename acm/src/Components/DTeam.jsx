import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function DTeam() {
  return (
      <>
    <navbar className="team">
            <div className="nav" id="nav-tab" role="tablist">
              <Link className="nav-item nav-link active" id="nav-home-tab" to="EC" >EXECUTIVE COUNCIL</Link>
              <Link className="nav-item nav-link" id="nav-profile-tab" >HEADS</Link>
              <Link className="nav-item nav-link" id="nav-contact-tab" >SUBHEADS</Link>
            <Link className="nav-item nav-link" id="nav-contact-tab" >MEMBERS</Link>
              </div>
              <Outlet/>
          </navbar>
          </>
  )
}

export default DTeam