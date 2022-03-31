import React, { lazy, Suspense } from 'react'


import Navbar from './Components/Navbar'
import {  Switch, Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'

import { ParallaxProvider } from 'react-scroll-parallax';
import ReactLoading from 'react-loading';


import ScrollToTop from './Components/ScrollToTopOnMount'
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'))
const Member = lazy(() => import('./Components/Member'));
const Softcom = lazy(() => import('./Components/Softcom'));
const ICPC = lazy(() => import('./Components/ICPC'));
const GALLARY = lazy(() => import('./Components/Gallery'));
const Participants = lazy(() => import('./Components/Participants'));
const Ambassador = lazy(() => import('./Components/Ambassador'));
const Footer = lazy(() => import('./Components/Footer'));
function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <ReactLoading type="balls"  height={200} width={200} paddingTop={500}/> */}
        <Suspense fallback={<ReactLoading className="loader" type="spinningBubbles"  height={50} width={50}  />}>
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
        </Suspense>
        </BrowserRouter>
        
    </div>
  )
}

export default App
