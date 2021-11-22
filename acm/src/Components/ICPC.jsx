import React from 'react'
import { Account, background, Logo } from './Images'
import { Link } from "react-router-dom"
import "../Assets/css/icpc.css"
import { Parallax } from 'react-scroll-parallax';
import "../Assets/css/App.css"
import { Helmet } from 'react-helmet';
function ICPC() {
    return (
      <div className="" >
         <Helmet >
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter | ICPC</title>
          <meta name="description" content=" The ACM International Collegiate Programming Contest (ICPC) is a multitier, team-based, programming competition. The ACM ICPC is considered as the 'Olympics of Programming Competitions'. It is quite simply, the oldest, largest, and most prestigious programming contest in the world."/>

        </Helmet>
       
          <Parallax className="inner_cover parallax-window" y={[-20, 20]} tagOuter="figure"  style={{overflow: 'hidden'}}>
        <img src={background} height="100%" width="100%" alt="" />
    
          
          <div />
          
            
              <div >
                
                 
                </div>
             
            
            <div className="breadcrumbs">
              <ul>
                <li><Link to="/">Home</Link>  </li>
                <li><span>ICPC</span></li>
              </ul>
            </div>
          
        </Parallax>
        
        <div className="pt100 pb100">
          <div className="container">
            <div className="event_box">
              <div className="event_info">
                <div className="event_title">
                  What is ICPC?
                </div>
              </div>
              <div className="event_word">
                <div className="row">
                  <div className="col-md-6 col-6">
                    The ACM International Collegiate Programming Contest (ICPC) is a multitier, team-based, programming competition. The ACM ICPC is considered as the "Olympics of Programming Competitions". It is quite simply, the oldest, largest, and most prestigious programming contest in the world.
                    <br /> <br /><br />
                  </div>
                  <div className="col-md-6 col-6 " >
                    <img className="Logo" src={Logo} alt="" />
                  </div>
                </div>     
              </div>
              <br /> 
            </div>
            <div className="event_box">
              <div className="event_info">
                <div className="event_title">
                  ACM ICPC ASIA-TOPI REGIONAL ONLINE COMPETITION 
                </div>
              </div>
              <div className="event_word">
                <div className="row">
                  <div className="col-md-6 col-6">
                    A preliminary Asia Topi Online Programming Contest will be held on 22-23 December, 2020, overall 200 teams are welcome to join this contest.
                    <br /> <br /><br />
                  </div>
                  <div className="col-md-6 col-6" style={{fontWeight: 700, textAlign: 'center'}}>
                    Registration Deadline: 14 December, 2020 <br />
                    Contest Dates: 22-23 December, 2020 <br />
                    Fees per team (Foreign Students) : $30  <br />
                    Fees per team (Local Students) : Rs. 3000
                  </div>
                </div>
              </div>
              <br /> 
            </div>
            <div className="event_box">
              <div className="event_info">
                <div className="event_title" style={{fontSize: '30px'}}>
                  REGISTRATION STEPS FOR ONLINE CONTEST 
                </div>
              </div>
              <div className="event_word">
                <div className="row">
                  <div className="col-md-6 col-6">
                    <h4> Step 1 </h4>
                    Fill the form mentioned in the link on the right. All the required authentic details must be filled as ACM GIKI will be verifying all the details after the registration process.  
                    <br /> <br /><br />
                  </div>
                  <div className="col-md-6 col-6" style={{fontWeight: 700, textAlign: 'center'}}>
                    <br /> <br />
                    Registration Link: <a href="https://docs.google.com/forms/d/1YlJO79lzwEmPUaeLHCfuUED-6EulrcEY45EbGc_jIl8/edit?usp=sharing" style={{color: 'blue'}}>shorturl.at/aeCFY</a>
                    <br /> <br /><br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <h4> Step 2 </h4>
                    Fill the form mentioned in the link on the right. This is the official ICPC registration form so please be careful while filling in the details.  
                    <br /> <br /><br />
                  </div>
                  <div className="col-md-6 col-6" style={{fontWeight: 700, textAlign: 'center'}}>
                    <br /> <br />
                    Registration Link: <a href="https://icpc.global/regionals/finder/Asia-Lahore-2020" style={{color: 'blue'}}>https://icpc.global/regionals/finder/Asia-Lahore-2020</a>
                    <br /> <br /><br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <h4> Step 3 </h4>
                    After filling both the forms above, a single transaction per team should be made to the account details mentioned on the right. <br />
                    Fees per team (Foreign Students) : $30  <br />
                    Fees per team (Local Students) : Rs. 3000    
                    <br /> <br /><br />
                  </div>
                  <div className="col-md-6 col-6">
                    <img src={Account} alt="" style={{width: '100%',overflowX:"hidden"}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <h4> Step 4 </h4>
                    After completing the payment, the team leader needs to send a screenshot of the deposit slip or the screenshot of the online transaction made by the team on this email address: <a href="mailto:someone@example.com" style={{color: 'blue'}}>acmgiki19@gmail.com</a>. Then after verifying the payment, the team's registration process will be completed.     
                    <br /> <br /><br />
                  </div>
                </div>
              </div>
              <br /> 
            </div>
            <div className="event_box">
              <div className="event_info">
                <div className="event_title">
                  ACM ICPC ASIA-TOPI REGIONAL ON-SITE COMPETITION 
                </div>
              </div>
              <div className="event_word">
                <div className="row">
                  <div className="col-md-6 col-6">
                    International Collegiate Programming Competition (ICPC), Regional contest i.e. The 2020 ICPC Asia Topi Regional On-Site Contest is going to be held at GIK Institute, Topi. 
                    ICPC is the olympics of the programming world and is considered as the world cup of computing. ICPC involves a network of dozens of universities hosting Regional competitions.
                    <br /> <br /><br />
                  </div>
                  <div className="col-md-6 col-6" style={{fontWeight: 700, textAlign: 'center'}}>
                    Registration Deadline: TO BE ANNOUNCED! <br />
                    Contest Dates: TO BE ANNOUNCED! <br />
                    Fees per team (Foreign Students) : TO BE ANNOUNCED! <br />
                    Fees per team (Local Students) : TO BE ANNOUNCED!
                  </div>
                </div>
              </div>
              <br /> 
            </div>
            {/* <div class="event_box">
            <div class="event_info">
                <div class="event_title" style="font-size: 30px;">
                    REGISTRATION STEPS FOR ON-SITE CONTEST 
                </div>
               
            </div>
            <div class="event_word">
                    <div class="row">
                    <div class="col-md-6 col-6">
                        <h4> Step 1 </h4>
                        Fill the form mentioned in the link on the right. This is the official ICPC registration form so please be careful while filling in the details.  
                        <br> <br><br>
                    </div>
                    
                    <div class="col-md-6 col-6" style="font-weight:700; text-align: center;">
                        <br> <br>
                        Registration Link: <a href="https://icpc.baylor.edu/regionals/finder/Asia-Topi-2019" style="color: blue;">https://icpc.baylor.edu/regionals/finder/Asia-Topi-2019</a>
                        
                        <br> <br><br>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 col-6">
                        <h4> Step 2 </h4>
                        Fill the second form mentioned in the link on the right. Please be careful while filling in the details.  
                        <br> <br><br>
                    </div>
                    
                    <div class="col-md-6 col-6" style="font-weight:700; text-align: center;">
                        <br> <br>
                        Registration Link: <a href="https://forms.gle/cfVPZrVnty1RvP966" style="color: blue;">https://forms.gle/cfVPZrVnty1RvP966</a>
                        
                        <br> <br><br>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 col-6">
                        <h4> Step 3 <span style="font-weight: 700;">(For Local Students)</span></h4>
                        After filling the form above, a single transaction per team should be made to the account details mentioned on the right. <br>
                        Fees per team (Local Students) : Rs. 18000    
                        <br> <br><br>
                    </div>
                    <div class="col-md-6 col-6">
                        <img src="assets/img/shiraz_account.JPG">
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6 col-6">
                        <h4> Step 3 <span style="font-weight: 700;">(For Foreign Students) </span></h4>
                        After filling the form above, a single transaction per team should be made to the account details mentioned on the right. <br>
                        Fees per team (Foreign Students) : $300  <br>
                        <br> <br><br>
                    </div>
                    <div class="col-md-6 col-6">
                        <img src="assets/img/giki_account.JPG">
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-12 col-12">
                        <h4> Step 4 </h4>
                        After completing the payment, the team leader needs to send a screenshot of the deposit slip or the screenshot of the online transaction made by the team on this email address: <a href="#" style="color: blue;">acmgiki19@gmail.com</a>. Then after verifying the payment, the team's registration process will be completed.     
                        <br> <br><br>
                    </div>
                    </div>
            </div>
            <br> 
        </div> */}
            {/*<div class="event_box">*/}
            {/*    <div class="event_info">*/}
            {/*        <div class="event_title">*/}
            {/*            Rules and Regulations*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div class="event_word">*/}
            {/*        <div class="row justify-content-center">*/}
            {/*            <ul id="list78">*/}
            {/*                <li style="font-weight:700;">Each team must consist of 3 members. More than 3 members will lead to disqualification.</li>*/}
            {/*                <li>Participants are not allowed to collaborate with anyone else other than his/her team member during the contest. This includes discussing, sharing, or posting the problem statements or solutions. Any contestant found cheating or attempting to cheat will be disqualified. If you suspect another contestant of cheating, please report any claims.</li>*/}
            {/*                <li>Any use of mobile phones is strictly prohibited, any contestant found using one will be disqualified at once.</li>*/}
            {/*                <li style="font-weight:700;">1 PC per team will be allotted.</li>*/}
            {/*                <li>Stationery will be provided to the participants. </li>*/}
            {/*                <li>Participants cannot leave the room during the competition.</li>*/}
            {/*                <li style="font-weight:700;">The Softcom Management reserves the right to change these rules without any prior notice. Decision of judges shall be considered final and cannot be challenged. </li>*/}
            {/*                <li>Participants can only communicate with the organizers or volunteers of the competition.</li>*/}
            {/*                <li>All technical queries of the participants will be entertained during the practice session which will be held before the start of the main competition.</li>*/}
            {/*                <li style="font-weight:700;">Duration of the contest will be 4 hours.</li>*/}
            {/*                <li style="font-weight:700;">Each team will be given 5-8 algorithmic problems.</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* <div class="event_box">*/}
            {/*     <div class="event_info">*/}
            {/*         <div class="event_title">*/}
            {/*             Software Specifications*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*     <div class="event_word">*/}
            {/*         <div class="row">*/}
            {/*             <ul id="list78">*/}
            {/*                 <li>Codeblocks</li>*/}
            {/*<li>Eclipse for JAVA & C++ (recommended and standard in all programming competitions)</li>*/}
            {/*<li>NetBeans IDE 7.0</li>*/}
            {/*                     <li>Java SDK</li>*/}
            {/*                     <li> PyCharm for Python</li>*/}
            {/*                     <li>CodeBlocks</li>*/}
            {/*                     <li>Note : Contestants are free to use any standard libraries.</li>*/}
            {/*             </ul>*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/* </div>*/}
            {/* <div class="event_box">*/}
            {/*     <div class="event_info">*/}
            {/*         <div class="event_title">*/}
            {/*             ICPC Sponsors*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*     <div class="event_word">*/}
            {/*         <div class="row">*/}
            {/*             <div class="col-md-6">*/}
            {/*             <img src="assets/img/jetbrains.png">*/}
            {/*         </div>*/}
            {/*         <div class="col-md-6">*/}
            {/*                 <img src="assets/img/elixir_logo.jpg" style="margin-top: 40px;">*/}
            {/*             </div>*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/* </div>*/}
            {/* <div class="event_box">*/}
            {/*     <div class="event_info">*/}
            {/*         <div class="event_title">*/}
            {/*             Site Director GIKI Institute*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*     <div class="event_word">*/}
            {/*         <div class="row">*/}
            {/*             <img src="assets/img/masroor_icpc.png" style="margin-left: 20px;">*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*     <ul id="list78">*/}
            {/*        <a href="team_2018.php" style="color:brown"> <li style="font-weight:700;">Team 2019 ACM-ICPC GIK-TOPI Softcom Multi-Provincial Programming Contest</li> </a>*/}
            {/*        <a href="#" style="color:brown"> <li style="font-weight:700;">Team 2018 ACM-ICPC GIK-TOPI Softcom Multi-Provincial Programming Contest</li> </a>*/}
            {/*     </ul>*/}
            {/* </div>*/}
            {/* <div class="event_box">*/}
            {/*     <div class="event_info">*/}
            {/*         <div class="event_title">*/}
            {/*             Submission*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*     <div class="event_word">*/}
            {/*         <div class="row justify-content-center">*/}
            {/*             <ul id="list78">*/}
            {/*                 You will be given Sample Inputs and Sample Outputs with each Problem Statement at the beginning of the Competition. You will have to make an Input file for every problem based on the format provided in the Sample Input. For example, the input file for Problem 1 shall be “Problem1.txt”, for problem 2, it shall be “Problem2.txt” and so on. The outputs of all the problems would have to be on the console according to the sample output given in . A PC^2 v9 software will be used as a competition management system, contestants are advised to have a look at the following link; <a href="http://www.ecs.csus.edu/pc2/doc/v9/PC2V9TeamGuide.pdf"> http://www.ecs.csus.edu/pc2/doc/v9/PC2V9TeamGuide.pdf</a>*/}
            {/*             </ul>*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/* </div>*/}
            {/* <div class="event_box">*/}
            {/*     <div class="event_info">*/}
            {/*         <div class="event_title">*/}
            {/*             Judgement Criteria*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/*     <div class="event_word">*/}
            {/*         <div class="row justify-content-center">*/}
            {/*             <ul id="list78">*/}
            {/*                 <li>Scores depend on how many tasks a team successfully performs, the team completing more tasks than others will have a better score.</li>*/}
            {/*                 <li>Penalty Points will affect the scores, the team having scored lowest penalty points will be a better team. Penalty Points are scored on solved problems only; unsolved problems have no bearing on scores. Penalty Points are scored in two ways:</li>*/}
            {/*                     <ol>*/}
            {/*                     <li>One Penalty Point is scored for each minute elapsed from the start of the round till the submission of the task (time it took to complete one task).</li>*/}
            {/*                         <li>A set amount of penalty points are reserved for each INCORRECT Submission.</li>*/}
            {/*                         </ol>*/}
            {/*                         <li>If by chance the scores and penalty points of two teams matched the tie would be */}
            {/*                             resolved by a judgement based on which team completed their task in less time.</li>*/}
            {/*                             <li>Judgement of the Judges Will be final.</li>*/}
            {/*             </ul>*/}
            {/*         </div>*/}
            {/*     </div>*/}
            {/* </div>*/}
            {/* 
       <div class="event_box">
            <div class="event_info">
                <div class="event_title"  style="font-size: 30px;">
                ACM ICPC ASIA-TOPI REGIONAL ONLINE COMPETITION 
                </div>
               
            </div>
            <div class="event_word">
                    <div class="row">
                    <div class="col-md-6 col-6">
                        <h4> Day 1 </h4> <br>
                        <div class="row">
                        <ul id="list78">
                            <li><a class="red bold" href = "ICPC_Day1.pdf" target="_blank">Day_1 Problems.pdf </a></li>
                            <li><a class="red bold" style="font-weight: 700;" target="_blank">PC^2 IP Address : 182.176.222.244:8004 </a></li>
                            <li><a class="red bold" href = "ScoreCard3.0.pdf" target="_blank">Day_1 ScoreCard.pdf </a></li>
                         </ul>
                </div>

                    </div>
                    <div class="col-md-6 col-6">
                    <h4> Day 2 </h4> <br>
                        <div class="row">
                        <ul id="list78">
                            <li><a class="red bold" href = "ICPC_Day2.pdf" target="_blank">Day_2 Problems.pdf </a></li>
                            <li><a class="red bold" style="font-weight: 700;" target="_blank">PC^2 IP Address : 182.176.222.244:8004 </a></li>
                            <li><a class="red bold" href = "scoring_rules.png" target="_blank"> Scoring Rules for Online Contest </a></li>
                            <li><a class="red bold" href = "FinalScoreboard.pdf" target="_blank">Day_2 ScoreCard.pdf </a></li>
                         </ul>
                </div>
                    </div>
                    </div>
            </div>
            <br> 
        </div> 
        */}
            <div className="event_box">
              <div className="event_info">
                <div className="event_title">
                  Important Links
                </div>
              </div>
              <div className="event_word">
                <div className="row">
                  <ul id="list78">
                    <li><a href="https://icpc.baylor.edu/regionals/finder/Asia-Topi-2019" target="_blank" rel="noreferrer" >ICPC team registration</a></li>
                    <li><a href="https://icpc.baylor.edu" target="_blank" rel="noreferrer" >ICPC headquarter</a></li>
                    <li><a href="http://blog.sina.com.cn/cjhwang" target="_blank" rel="noreferrer" >Blog - Asia Director Professor C JHwang's new</a></li>
                    <li><a href="https://icpc.baylor.edu/regionals/rules" target="_blank" rel="noreferrer" >Regional Rules</a></li>
                    <li><a href="https://icpc.baylor.edu/worldfinals/rules" target="_blank" rel="noreferrer" >World Final Rules</a></li>
                    <li><a className="red bold" href="icpc_2019.php" target="_blank" rel="noreferrer" >Team 2019 ACM-ICPC GIK-TOPI Softcom Multi-Provincial Programming Contest</a></li>
                    <li><a className="red bold" href="icpc_sample.pdf" target="_blank" rel="noreferrer" >Sample ICPC Problem</a></li>
                    {/*<li><a class="red bold" href = "ICPC_Day 2_Problems.docx" target="_blank">Click here for the problems set</a></li>*/}
                    <li><a className="red bold" href="icpc_2018.php" target="_blank" rel="noreferrer" >Team 2018 ACM-ICPC GIK-TOPI Softcom Multi-Provincial Programming Contest</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*event div end */}
        {/*get tickets div */}
        <div className="bg-img pt100 pb100" style={{backgroundImage: 'url({"assets/img/bg/tickets.jpg"})'}}>
          <div className="container">
            <div className="section_title mb30">
              <h3 className="title color-light">
                get registered
              </h3>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-9 text-md-left text-center color-light">
                SOFTCOM organized by ACM is held at the GIKI campus and the ACM student body is assisted by the 
                GIKI administration to make this event a huge success. Get yourself registered for the biggest tech event 
                of Pakistan by clicking the button on the right.
              </div>
              <div className="col-md-3 text-md-right text-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQJjAOUrzgTUibbnTGnsSrvrqGdCuGLNYKSIuxH0hVaTZeAg/viewform?vc=0&c=0&w=1" className="btn btn-primary btn-rounded mt30">Click to register</a>
              </div>
            </div>
          </div>
        </div>
        {/*get tickets div end*/}
      </div>
    )
}

export default ICPC
