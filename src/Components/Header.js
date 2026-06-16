import React from 'react';
import Viewmywork from './Viewmywork';

const Home = () => {
  return (
    <div style={{backgroundColor:'#2872a1'}}>
       <div id='header' className="container text-white text-center py-md-5">
          <div className='row'>
             <h2  className=" fw-bold">Hello, I'm Pavitra 👋</h2>
              <p className="lead fw-semibold mb-4">
        Frontend Developer |  Mern Stack Developer</p>
        <Viewmywork/>
       {/* <a href="#projects" className="btn btn-primary btn-sm">View My Projects</a> */}
          </div>
    </div>
    </div>
  );
}

export default Home;
//  <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
//                     <h1 className="display-4 fw-bold">Hi, I'm Pavitra Gundikeri</h1>
//                     <p className="lead mb-4">A passionate Full Stack Developer with expertise in React, Node.js, and MongoDB. I create dynamic and responsive web applications that deliver exceptional user experiences.</p>
//                     <a href="#projects" className="btn btn-primary btn-lg">View My Projects</a>
//                 </div>
//                 <div className="col-md-6">
//                     <img src="https://via.placeholder.com/500x300" alt="Profile" className="img-fluid rounded" />
//                 </div>