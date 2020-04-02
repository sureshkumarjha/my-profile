import React ,{ useState,useEffect  } from 'react';
import SlidingText from './components/SlidingText';
import Nav from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'tachyons'
function App() {

  return (
    <div className="App">
    
    <Nav/> 

    <div className="main tc flex justify-center" id="section1">
    <div className='flex flex-column justify-center'>
      <div className='subheading'>HEY! I AM</div>
      <div className='f2 heading pa2 b'>Suresh Kumar Jha</div>
      <SlidingText/>
    </div>  
    </div>

    <Footer/>
    </div>
  );
}

export default App;
