import React from 'react';
import Viewmywork from './Viewmywork';

const About = () => {
  return (
    <div style={{backgroundColor:'#eaeffe'}}>

       <div id="about" className="container-fluid d-flex justify-content-center align-items-center p-5" >
        <div className=' card  text-center  p-4 rounded-4' style={{
          maxWidth: "800px",
          width: "100%",
        }}>
        <h2 className='mb-3 text-center'>About Me</h2>
        <p className="lead text-start">I am a BCA graduate with basic knowledge of web development and programming. I have worked with HTML, CSS, Bootstrap, JavaScript, React, Node.js, MongoDB, and MySQL in my projects. I like creating simple and responsive websites. I am looking for a fresher opportunity to learn new skills and start my career as a software developer.</p>
        <Viewmywork/>
        </div>
         </div>
    </div>
  );
}

export default About;
