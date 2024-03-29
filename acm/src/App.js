import React, { lazy, Suspense } from 'react'


import Navbar from './Components/Header and Footer/Navbar'
import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactLoading from 'react-loading';


import ScrollToTop from './Components/ScrollToTopOnMount'
import Footer from './Components/Header and Footer/Footer';
// const Member = lazy(() => import('./Components/Team/Member'));
import Member from "./Components/Team/Member"

const Developers_Cell =lazy(() => import('./Components/Developers_Cell'));
const Home = lazy(() => import('./Components/Home/Home'));
const About = lazy(() => import('./Components/About/About'))
const Softcom = lazy(() => import('./Components/Softcom/Softcom'));
const ICPC = lazy(() => import('./Components/ICPC/ICPC'));
const GALLARY = lazy(() => import('./Components/Gallery/Gallery'));
const Participants = lazy(() => import('./Components/Forms/Participants'));
const Ambassador = lazy(() => import('./Components/Forms/Ambassador'));


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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/team" component={Member} />

            <Route path="/developer's_cell" component={Developers_Cell} />
            <Route path="/softcom" component={Softcom} />
            <Route path="/gallery" component={GALLARY} />

            <Route path="/participant" component={Participants} />
            <Route path="/ambassador" component={Ambassador} />
            <ParallaxProvider>
              <Route path="/icpc" component={ICPC} />
            </ParallaxProvider>
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
