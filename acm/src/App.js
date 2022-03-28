import React from 'react'


import Navbar from './Components/Navbar'
import {  Switch, Route } from "react-router-dom"
import { HashRouter } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'

// import "./App.css"
import Member from './Components/Member'
import Softcom from './Components/Softcom'

import Participants from './Components/Participants'
import Ambassador from './Components/Ambassador'
import ICPC from './Components/ICPC'
import { ParallaxProvider } from 'react-scroll-parallax';
import GALLARY from './Components/Gallery'

import ScrollToTop from './Components/ScrollToTopOnMount'

function App() {
  return (
    <div>
<HashRouter>
        <Navbar />
      


         <ScrollToTop/>
        <Switch>
         
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Member}/>
          <Route path="/softcom" component={Softcom} />
          <Route path="/gallery" component={GALLARY} /> 
       
          <Route path="/participant" component={Participants} />
          <Route path="/ambassador" component={Ambassador} />
          
          <ParallaxProvider>
            <Route path="/icpc" component={ICPC} />
            </ParallaxProvider>
        </Switch>
      <Footer/> 
        
        </HashRouter>
        
    </div>
  )
}

export default App
