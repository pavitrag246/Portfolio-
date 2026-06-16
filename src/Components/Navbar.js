import React from 'react';

const Navbar = () => {
  return (
    // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    //   <div className="container">
    //     <a className="navbar-brand" href="#">Pavitra Portfolio</a>

    //     <div>
    //       <a href="#about" className="text-white me-3">About</a>
    //       <a href="#projects" className="text-white me-3">Projects</a>
    //       <a href="#contact" className="text-white">Contact</a>
    //     </div>
    //   </div>
    // </nav>

     <div className="container-fluid" style={{background:'#7AAACE'}} >
          <nav className="navbar navbar-expand-lg ">
           <h3 className='text-light ms-4'>Pavitra Gundikeri</h3>
               <ul className="navbar-nav ms-auto  " >
                 <li className="nav-item m-2 "> <a href="#header" className="nav-link text-light"><i className='fa fa-home  me-2 fs-6'></i>Home</a></li>
                 <li className="nav-item m-2"><a href="#about" className="nav-link text-light"> <i className='fa fa-user  me-2 fs-6'></i>About</a></li>
                 <li className="nav-item m-2"><a href="#education" className="nav-link text-light"><i className='fa fa-graduation-cap fs-6 me-2'></i>Education</a></li>
                 <li className="nav-item m-2"><a href="#skill" className="nav-link text-light"><i className='fa fa-book  me-2 fs-6'></i>Skills</a></li>
                 <li className="nav-item m-2"><a href="#projects" className="nav-link text-light"><i className='fa fa-folder  me-2 fs-6'></i>Projects</a></li>
                 <li className="nav-item m-2"><a href="#contact" className="nav-link text-light"><i className='fa fa-phone me-2 fs-6'></i>Contact</a></li>
                
             </ul>
            </nav>
     </div>
  );
};

export default Navbar;
