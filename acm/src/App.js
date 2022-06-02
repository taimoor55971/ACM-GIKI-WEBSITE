import React, { lazy, Suspense } from 'react'


import Navbar from './Components/Navbar'
import {   Routes,Route } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'

import { ParallaxProvider } from 'react-scroll-parallax';
import ReactLoading from 'react-loading';


import ScrollToTop from './Components/ScrollToTopOnMount'
import Footer from './Components/Footer';

const Developers_Cell =lazy(() => import('./Components/Developers_Cell'));
const Home = lazy(() => import('./Components/Home'));
const About = lazy(() => import('./Components/About'))
const Member = lazy(() => import('./Components/Member'));
const Softcom = lazy(() => import('./Components/Softcom'));
const ICPC = lazy(() => import('./Components/ICPC'));
const GALLARY = lazy(() => import('./Components/Gallery'));
const Participants = lazy(() => import('./Components/Participants'));
const Ambassador = lazy(() => import('./Components/Ambassador'));
const Heads = lazy(() => import('./Components/Heads'));
const SubHeads = lazy(() => import('./Components/Ambassador'));

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ReactLoading type="balls"  height={200} width={200} paddingTop={500}/> */}
        <Navbar />
        <Suspense
          fallback={
            <ReactLoading
              className="loader"
              type="spinningBubbles"
              height={50}
              width={50}
            />
          }
        >
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/team" element={<Member/>}/>
             
            <Route path="/developer's_cell" element={<Developers_Cell/>} />
            <Route path="/softcom" element={<Softcom/>} />
            <Route path="/gallery" element={<GALLARY/>} />

            <Route path="/participant" element={<Participants/>} />
            <Route path="/ambassador" element={<Ambassador/>} />

            {/* <ParallaxProvider>
              <Route path="/icpc" element={ICPC} />
            </ParallaxProvider> */}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
