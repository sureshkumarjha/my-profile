import React ,{ useState,useEffect  } from 'react';
import SlidingText from './components/SlidingText';
import Nav from './components/Header';
import Footer from './components/Footer';
import suresh from './images/suresh.jpg';
import avtar from './images/avtar.jpg';
import './App.css';
import 'tachyons'
function App() {

  return (
    <div>
    <Nav/>
    
    <section>
    <div className="tc flex justify-center" id="section1">
    <div className='overlay shadow-1' style={{zIndex: "-1"}}></div>
    <div className='flex flex-column justify-center items-center '>
      <img src={avtar} height="250" width="250" className='ma3 br-100 shadow-1'/>
      <div className='subheading'>HEY! I AM</div>
      <div className='f2 heading pa2 b'>Suresh Kumar Jha</div>
      <SlidingText/>
    </div>  
    </div>
    </section>

    <section id = "about" className='container section flex  justify-center items-center ' >
    <div>
    <div className='subheading tc f2 pa2 ma5' >ABOUT ME</div>

    <div className="flex justify-center items-center aboutparent">

    <div className="block">
      <img src={avtar} alt="A bright blue sky" className='br4' />
    </div>

    <div className="aboutblock container ">

    <div className="flex"><span>Name :</span> <span>Suresh Jha</span></div>
    <div className="flex"><span>DOB:</span> <span>March 22, 1999</span></div>
    <div className="flex"><span>Zip code :</span> <span>400080</span></div>
    <div className="flex"><span>Email :</span> <span>ronaldo@gmail.com</span></div>
    <div className="flex"><span>Phone : </span> <span>+1-2234-5678-9-0</span></div>
    </div>

    </div>
    </div>
    </section>

    <hr className=" bb b--black-10"/>

    <section id = "resume">
    <div className='subheading tc f2 pa2 ma5' >RESUME</div>
    <div className="tc flex justify-center flex-wrap container" >

      <article className="center mw6-ns br3 hidden ba b--black-10 mv4">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </article>

        <article className="center  mw6-ns br3 hidden ba b--black-10 mv4 ">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </article>

        <article className="center  mw6-ns br3 hidden ba b--black-10 mv4 ">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        </article>

        <article className="center mw6-ns br3 hidden ba b--black-10 mv4 ">
        <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
        <div className="pa3 bt b--black-10">
          <p className="f6 f5-ns lh-copy measure">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </article>

    </div>
    </section>

    <hr className=" bb b--black-10"/>

    <section id = "projects">
    <div className='subheading tc f2 pa2 ma5' >PROJECTS</div>
    <div className="tc flex justify-center flex-wrap container">

    <article className="mw5-ns  center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className="bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    <article className="mw5-ns center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    <article className="mw5-ns center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>    

    <article className="mw5-ns center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
      
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    <article className="mw5-ns  center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    <article className="mw5-ns center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    <article className="mw5-ns center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>    

    <article className="mw5-ns center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
      
        <h1 className="f4">Mimi Whitehouse</h1>
        <hr className=" bb bw1 b--black-10"/>
      </div>
      <p className="lh-copy measure center f6 black-70">
        Quite affectionate and outgoing.
        She loves to get chin scratches and will
        roll around on the floor waiting for you give her more of them.
      </p>
    </article>

    </div>
    </section>

    <Footer/>
    </div>
  );
}

export default App;
