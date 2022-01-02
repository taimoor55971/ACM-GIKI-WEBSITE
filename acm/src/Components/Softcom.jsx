import React from 'react'
import { Helmet } from 'react-helmet'
import "../Assets/css/softcom.css"
import { hack, icpc, posterDes, quiz, softcom, startup } from './Images'

function Softcom() {
    return (
      <div id="softcom">
         <Helmet >
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter | Softcom</title>
          <meta name="description" content="SOFTCOM is an All Pakistan Software, Multimedia, Quiz and Speed Programming Competition. GIKI held its first SOFTCOM in the year 2000 and since then has been holding this event regularly every year. This major event that is organized by ACM is held at the GIKI campus and the ACM student body is assisted by the GIKI administration to make this event a huge success. This gathering of over 300 intelligent and motivated engineering students has always been the source of giving birth to innovative ideas, immaculate solutions and immense sense of positive competition. In 3 days filled with fun, enjoyment, thrill and competition, students have an experience of life-time that is worth remembering for them." />
        </Helmet>
             <div className="card">
          <img src={softcom}className="card-img-top" alt="..." />
        </div>
        <div className="head"><h2>ABOUT SOFTCOM</h2><div className="container"><p>SOFTCOM is an All Pakistan Software, Multimedia, Quiz and Speed Programming Competition. 
              GIKI held its first SOFTCOM in the year 2000 and since then has been holding this event regularly every year. 
              This major event that is organized by ACM is held at the GIKI campus and the ACM student body is assisted by the 
              GIKI administration to make this event a huge success. This gathering of over 300 intelligent and motivated engineering 
              students has always been the source of giving birth to innovative ideas, immaculate solutions and immense sense of positive competition. In 3 days filled with fun, enjoyment, thrill and competition, students have an experience of life-time that is worth remembering for them.</p></div></div>
        <div className="container"><hr /></div>
        <br /><br />
        <div className="container">
          <div data-aos="fade-in" data-aos-duration="300" className="row justify-content-center" id="hackathon">
            <div className="col-lg-6 shadow">
              <h4>HACKATHON</h4>
              <p className="lead1">
                If you’re a participant: You need an arena to demonstrate your coding prowess. Most importantly, you want an opportunity to participate in 
                an event that really brings your local developers’ community together: you’ll meet fellow hackers; see what they’re up to and show what you can
                do.Big companies are beginning to understand that hackathons offer the brand visibility they desire as well as the audience they’re trying to 
                target – and that audience is quite receptive.Hacking begins with project introductions. Participants that bring projects to the event have an 
                opportunity to briefly present over what they are working on at the very start of the event, so that other participants can join that project.
                At the end of the event, a wrap-up session gives each project a chance to demonstrate some accomplishments.
              </p>  
            </div>
            <div id="col_img" className="col-lg-6">
              <img id="about_images" src={hack}alt="" /> 
            </div>
          </div>
          <br /><hr /><br />
          <div data-aos="fade-in" data-aos-duration="300" className="row justify-content-center" id="icpc">
            <div className="col-lg-6 shadow">
              <h4>ICPC</h4>
              <p className="lead1">
                The ICPC is a 5-hour contest in which teams of three university students equipped with one computer seek to solve as many problems as they can by developing software solutions that meet the judges criteria. There are no near misses. A submission is accepted or rejected, with little information provided in the event of rejection. The contestants want to see some simple problems, some medium difficulty problems, and some really challenging problems.
                The judges build the mountains. The contestants knock them down to mole hills. At least, the ones that advance to the World Finals do. A regional contest is a time when a university, the ICPC, IBM, and ACM can partner in providing students with an event, much like a three day conference with the focal point being the competition.
              </p>  
            </div>
            <div id="col_img" className="col-lg-6">
              <img id="about_images" src={icpc} alt="" />
            </div>
          </div>
          <br /><hr /><br />
          <div data-aos="fade-in" data-aos-duration="300" className="row justify-content-center" id="poster">
            <div className="col-lg-6 shadow">
              <h4>POSTER DESIGN</h4>
              <p className="lead1">Creativity can’t be possessed by studying or by some other resources, it is something you are naturally born with and often this
                feature captivates you in such a way that it often becomes your reorganization. So this competition is designed to test whether you
                have lived up to your birth mark?Mixing your novelty with creativity and using the right tools is all that this competition is 
                about.</p>  
            </div>
            <div id="col_img" className="col-lg-6">
              <img id="about_images" src={posterDes} alt="" /> 
            </div>
          </div>
          <br /><hr /><br />
          <div data-aos="fade-in" data-aos-duration="300" className="row justify-content-center" id="quiz">
            <div className="col-lg-6 shadow">
              <h4>QUIZ COMPETITION</h4>
              <p className="lead1">Quizzes have always been a major source of analyzing ones talent in one’s profession, thus making an inclusion of a mega quiz, a vital part of annual ritual of ACM. Let your intellect shine, let the rolling of brain race with every passing of minute. ACM GIKI is coming up with a distinctive quiz competition for undergraduate students. 
                The competition is going to be based on General Knowledge; the set of questions will be related to the general academic curriculum of computer science, general sciences and engineering students, to make it more practicable for participants.</p>  
            </div>
            <div id="col_img" className="col-lg-6">
              <img id="about_images" src={quiz} alt="" /> 
            </div>
          </div>
          <br /><hr /><br />
          <div data-aos="fade-in" data-aos-duration="300" className="row justify-content-center" id="startup">
            <div className="col-lg-6 shadow">
              <h4>STARTUP COMPETITION</h4>
              <p className="lead1"> Startup Competition, the trial by fire opportunity that could turn your dream into reality. It is a startup accelerator for 
                budding young social entrepreneurs emerging from universities. It aims to identify and launch the most compelling social 
                business ideas—start-up enterprises that tackle grave issues faced by billions of people.  The teams would present their 
                business plans to a panel of corporate people and venture investor judges in front of a well-connected audience at GIKI. 
                Teams will compete for titles like best design, best video ads and best overall. We have built an infrastructure and community 
                to support, nurture, and fund early stage startups.</p>  
            </div>
            <div id="col_img" className="col-lg-6">
              <img id="about_images" src={startup} alt="" /> 
            </div>
          </div>
        </div>
 <br/><br/>
        </div>
    )
}

export default Softcom
