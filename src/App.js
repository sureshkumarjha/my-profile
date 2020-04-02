import React ,{ useState,useEffect  } from 'react';
import SlidingText from './components/SlidingText';
import Nav from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'tachyons'
function App() {

  return (
    <div>
    <Nav/>
    
    <section>
    <div className="tc flex justify-center" id="section1">
    <div className='overlay' style={{zIndex: "-1"}}></div>
    <div className='flex flex-column justify-center'>
      <div className='subheading'>HEY! I AM</div>
      <div className='f2 heading pa2 b'>Suresh Kumar Jha</div>
      <SlidingText/>
    </div>  
    </div>
    </section>

    <section id = "about">
    <div className="tc flex justify-center" id="section1">
    <div className='flex flex-column justify-center'>
      <div className='subheading'>ABOUT ME</div>
      <div className='f2 heading pa2 b'>Suresh Kumar Jha</div>
    </div>  
    <div className=''></div>
    </div>
    </section>

    <section id = "resume">
    <div className="tc flex justify-center" id="section1">
    <div className='flex flex-column justify-center'>
      <div className='subheading'>Education Experience Skills Awards
</div>
      <div className='f2 heading pa2 b'>Suresh Kumar Jha</div>
    </div>  
    <div className=''></div>
    </div>
    </section>

    <section id = "projects">
    <div className="tc flex justify-center" id="section1">
    <div className='flex flex-column justify-center'>
      <div className='subheading'>Projects</div>
      <div className='f2 heading pa2 b'>Suresh Kumar Jha</div>
    </div>  
    <div className=''></div>
    </div>
    </section>

    <Footer/>
    </div>
  );
}

export default App;
