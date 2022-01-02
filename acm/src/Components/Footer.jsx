import React from 'react'
import { logo2 } from './Images'
//import { FaFacebook,FaInstagram } from 'react-icons/fa';
//import { FcGoogle } from "react-icons/fc";
import "../Assets/css/footer.css"
import { SocialIcon } from 'react-social-icons';
function Footer() {

    return (
        <div id="footer" data-aos="zoom-in">
             <div  className="footer">
          <div className="container" >
            <div className="row justify-content-md-around" id="ftr-row">
              <div className="col-12 col-lg-3">
                <img src={logo2} id="ftr-logo" alt="" />
                <hr />
                <p className="lead3">
                  ACM is well known for holding workshops and guiding the students
                  about the major design and development tools and software which
                  are Link must in the world of today. Many students who have later
                  gone on to develop on Link professional basis owe their start in the
                  field to these workshops
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <h4 id>FACEBOOK</h4>
                 <iframe title={"a"} src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FACMGIKI&tabs=timeline&width=500&height=300&small_header=0&adapt_container_width=1&hide_cover=0&show_facepile=1&appId" width={500} height={300} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="1" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
                </div>
              <div className="col-12 col-lg-3">
                <h4 id>CONTACT US</h4>
                <br />
                <i  className="fa fa-map-marker" />
                <p style={{display: 'inline'}} className="lead4">
                  GIK Institute District Swabi KPK
                </p>
                <br /><br />
                <i style={{display: 'inline'}} className="fa fa-phone" />
                <p style={{display: 'inline'}} className="date1">(+92) 331-2856736</p>
                <br /><br />
                <i style={{display: 'inline'}} className="fa fa-phone" />
                <p style={{display: 'inline'}} id="mail" className="date1">
                  (+92) 336-6711377
                </p>
                <br /><br />
                
                   
                
                  <SocialIcon network="facebook" className="social" url="https://www.facebook.com/ACMGIKI" target="_blank" rel="noopener noreferrer" />
                    
                  
                
                    <SocialIcon network="linkedin"  className="social"  url="https://www.linkedin.com/company/acm-student-giki-chapter/mycompany/?viewAsMember=true" target="_blank" rel="noopener noreferrer" />
                  
                  
                <SocialIcon network="instagram" className="social" url="https://www.instagram.com/acm.giki/" target="_blank" rel="noopener noreferrer"  />
                
                  
              </div>
            </div>
            <hr id="ftr-line" />
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <p style={{fontSize: '15px !important', fontFamily: '"Roboto", sans-serif !important'}} className="lead4">
                  Copyright © <span className="date">2021</span> All rights
                  reserved | Website by
                  {/* <a id="ATT" href="https://www.linkedin.com/in/taimoor-khan-96b19b190/"rel="noreferrer" target="_blank">ACM TECH TEAM</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
     
            
        </div>
    )
}

export default Footer
