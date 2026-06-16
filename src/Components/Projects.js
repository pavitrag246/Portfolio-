import React from 'react';

const Projects = () => {
  return (
    <div style={{background:'#eaeffe'}}>
      <div className="container-fluid p-5">
     <div id='projects' className="container mt-5">
  <h2 className="text-center mb-4">Projects</h2>

  {/* Project Cards */}
  <div className="row">
      <h2 className=" mb-5">Frontend Projects</h2>
      <div className="col-md-4 mb-3">
      <div className="card shadow rounded-3 h-100">
        <div className="card-body">
          <h5 className="card-title">📊 Static Admin Dashboard</h5>
          <p>
         A responsive dashboard UI built using HTML, CSS, and Bootstrap. Includes sidebar navigation, summary cards, and tables with a clean and modern design.
          </p>
          <h6> <span className='fw-bold'>Technologies:</span> HTML, CSS, Bootstrap</h6>
          <h6><span className='fw-bold'>Features:</span> Responsive design, Cards, Tables, Sidebar</h6>
           <a href="https://github.com/pavitrag246/Dashboard.git" target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm mt-4">
            GitHub Code
          </a>
          </div>
          </div>
         </div>

          <div className="col-md-4 mb-3">
      <div className="card shadow rounded-3 h-100">
        <div className="card-body">
          <h5 className="card-title">💻 AnnuTech Store Website</h5>
          <p >
          Responsive IT store website built using HTML, CSS, Bootstrap, and JavaScript with login/register UI.
          </p>
           <h6> <span className='fw-bold'>Technologies:</span> HTML, CSS, Bootstrap, Javascript</h6>
          <h6><span className='fw-bold'>Features:</span> Responsive UI, Carousel, Login/Register Modal, Form Validation, LocalStorage.</h6>
           <a href="https://github.com/pavitrag246/AnnuTech-Store.git" target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm mt-4">
            GitHub Code
          </a>
          </div>
          </div>
         </div>

         <div className="col-md-4 mb-3">
  <div className="card shadow rounded-3 h-100">
    <div className="card-body">
      <h5 className="card-title">🎉 Eventra – Event Management System</h5>
      <p >
        A responsive event management website where users can register, book events like weddings or parties, and get automatic invoices.
      </p>
      <h6><span className='fw-bold'>Technologies:</span> HTML, CSS, Bootstrap, JavaScript</h6>
      <h6><span className='fw-bold'>Features:</span> User Registration/Login, Event Booking Form, Automatic Billing, Responsive Design</h6>
      <a href="https://github.com/pavitrag246/Eventra-event-management-website.git" target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm">
        GitHub Code
      </a>
    </div>
  </div>
</div>
</div> 
 <div className="row">
          <div className="col-md-4 mb-3">
      <div className="card shadow rounded-3 h-100">
        <div className="card-body">
          <h5 className="card-title">Restaurant website</h5>
          <p>
        A responsive restaurant website to explore restaurants, view menus, and book tables online. Includes login/signup modals and Google Maps integration.
          </p>
          <h6> <span className='fw-bold'>Technologies:</span> HTML, CSS, Bootstrap, Javascript</h6>
          <h6><span className='fw-bold'>Features:</span> Responsive design for mobile & desktop</h6>
           <a href="https://github.com/pavitrag246/Restaurant-website-bootstrap-js.git" target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm mt-4">
            GitHub Code
          </a>
          </div>
          </div>
         </div>
   </div>

      <div className="row mt-2"> 
           <h2 className=" mb-5">Backend Projects</h2>
    {/* Project 1 */}
    <div className="col-md-6 mb-3">
      <div className="card shadow-lg h-100">
        <div className="card-body">
          <h5 className="card-title">E-Commerce Website</h5>
          <p className="card-text">
            Built a responsive shopping website using React and Bootstrap.
            Includes product listing and cart UI.
          </p>

          <a href="https://github.com/pavitrag246" target="_blank"  rel="noreferrer" className="btn btn-primary btn-sm me-2">
            Live Demo
          </a>
          <a href="https://github.com/pavitrag246" target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm ">
            GitHub Code
          </a>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="col-md-6 mb-3">
      <div className="card shadow-lg h-100">
        <div className="card-body">
          <h5 className="card-title">Crime Report System</h5>
          <p className="card-text">
            React frontend app to submit and view crime reports.
            Designed using Bootstrap responsive layout.
          </p>

          <a href="https://github.com/pavitrag246/Crime-Report-System.git" target="_blank"  rel="noreferrer" className="btn btn-primary btn-sm me-2">
            Live Demo
          </a>
          <a href="https://github.com/pavitrag246/Crime-Report-System.git" target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm ">
            GitHub Code
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

<section class="container mt-5" id="resume-section">
    <h2 class="text-center mb-4">My Resume</h2>

    <div class="row justify-content-center">

     
        <div class="col-md-6 mb-4">
            <div class="card shadow-lg text-center rounded-4 p-4">
                <h5 class="mb-3">Frontend / MERN Stack Developer</h5>
                <p class="text-muted">React, HTML, CSS, Bootstrap, JavaScript</p>

                <a href="Pavitra_G_Resume.pdf" target="_blank"
                   class="btn btn-primary me-2"
                   download>
                   Download Resume
                </a>

                <a href="Pavitra_G_Resume.pdf" 
                   class="btn btn-outline-secondary mt-4"
                   target="_blank">
                   View Resume
                </a>
            </div>
        </div>

    </div>
</section>

</div>
    </div>
  );
}

export default Projects;
