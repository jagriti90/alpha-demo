import React from 'react'
import './App.css';
// import { Blog,  Features, Footar, Header, Possibility, WhatGPT3 } from './container/';
// import { CTA, Navbar, Brand } from './components';
import Blog from './container/bolg/Blog'
import  Features from './container/features/Features';
import  Footar from './container/footer/Footer';
import Header from './container/header/Header';
import Possibility from './container/possibility/Possiblity'
import WhatGPT3  from './container/whatGPT3/WhatGPT3';

import { Navbar } from './components';
import {Brand}  from './components';
import {CTA} from './components';



  function App() {
    return (
      <>
        <div>
          <div className='gradiant_bg'>
            <Navbar />
            <Header />
          </div>
          <div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footar />
          </div>
        </div>
      </>
    )
  }

export default App