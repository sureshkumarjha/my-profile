import React  from 'react';

function Nav() {
const openNav = ()=> {
  document.getElementById("mySidenav").style.height = "100%";
}

const closeNav =()=> {
  document.getElementById("mySidenav").style.height = "0";
}
  return (
    <div>
  <header className="bg-black fixed w-100 ph3 pv3  ph3-m ph4-l"
   style={{
    zIndex: "1",
    opacity:"1",
    display:"flex",
    justifyContent:"flex-end"
  }}>
    <nav className="f6 fw6 ttu tracked">
      <span className='dim white f4 pointer' onClick={openNav} >&#9776;</span>
    </nav>
  </header>

    <div id="mySidenav" className="sidenav">
    <div className='flex flex-column justify-center'>
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
      <a href="#about" onClick={closeNav} >About</a>
      <a href="#resume" onClick={closeNav}>Resume</a>
      <a href="#projects" onClick={closeNav}>Projects</a>
      <a href="#contact" onClick={closeNav} >Contact</a>
    </div>
    </div>
    </div>
  );
}

export default Nav;