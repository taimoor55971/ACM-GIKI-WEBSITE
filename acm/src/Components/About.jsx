import React from 'react'
import { Helmet } from 'react-helmet'
import '../Assets/css/about.css'
import ScrollToTop from "react-scroll-to-top";

function About() {
    return (
      <div id="about">
        <ScrollToTop smooth color="#6f00ff" />
         <Helmet >
          <meta charSet="utf-8" />
          <title>ACM_GIKI Chapter|About</title>
          <meta name="description" content="ACM GIKI About Page"/>

        </Helmet>
             <div className="pimg1" >
          <div className="ptext">
            <span className="border"> ABOUT ACM </span>
          </div>
        </div>
        <section className="section section-light">
          <h2>ORIGIN</h2>
          <p className="lead1">
            The Association for Computing Machinery was founded as the Eastern
            Association for Computing Machinery at a meeting at Columbia University
            in New York on September 15, 1947. Its creation was the logical
            outgrowth of increasing interest in computers as evidenced by several
            events, including a January 1947 symposium at Harvard University on
            large-scale digital calculating machinery; the six-meeting series in
            1946-47 on digital and analog computing machinery conducted by the New
            York Chapter of the American Institute of Electrical Engineers; and the
            six-meeting series in March and April 1947, on electronic computing
            machinery conducted by the Department of Electrical Engineering at
            Massachusetts Institute of Technology. In January 1948, the word
            “Eastern” was dropped from the name of the Association. In September
            1949, a constitution was instituted by membership approval.
          </p>
        </section>
        <div className="pimg2" />
        <section className="section section-dark">
          <h2>SCOPE</h2>
          <p className="lead1">
            The present constitution states: The Association is an international
            scientific and educational organization dedicated to advancing the art,
            science, engineering, and application of information technology, serving
            both professional and public interests by fostering the open interchange
            of information and by promoting the highest professional and ethical
            standards.
          </p>
        </section>
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans"> </span>
          </div>
        </div>
        <section className="section section-dark">
          <h2>CHAPTERS</h2>
          <p className="lead1">
            ACM has established student chapters to provide an opportunity for
            students to play a more active role in the Association and its
            professional activities. More than 500 colleges and universities
            throughout the world participate in the ACM Student Chapter Program,
            whose aims are to enhance learning through exchange of ideas among
            students, and between established professionals and students. By
            encouraging organization of student chapters on college and university
            campuses, the Association is able to introduce students to the benefits
            of a professional organization. These benefits include periodic
            meetings, which encourage and enhance learning through the exchange of
            ideas among students, and between established and students.
          </p>
        </section>
        <div className="pimg4">
          <div className="ptext">
            <span className="border trans"> </span>
          </div>
        </div>
        <section className="section section-dark">
          <h2>SPECIAL INTEREST ACTIVITIES</h2>
          <p className="lead1">
            ACM’s Special Interest Groups (SIGs) in 34 distinct areas of information
            technology address varied interests: programming languages, graphics,
            computer-human interaction, and mobile communications, to name a few.
            Each SIG organizes itself around those specific activities that best
            serve both its practitioner- and research-based constituencies. Many
            SIGs sponsor conferences and workshops and offer members reduced rates
            for registration and proceedings. SIGs also produce newsletters and
            other publications or support lively e-mail forums for information
            exchange.
          </p>
        </section>
        <div className="pimg1" />

            
        </div>
    )
}

export default About
