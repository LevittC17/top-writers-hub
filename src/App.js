import React from 'react'

import {Footer, Blog, Services, Header, WhatGPT3, Features} from './containers';
import {CTA, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Services />
      <CTA />
      <Blog />
      <Footer /> 
    </div>
  )
}

export default App