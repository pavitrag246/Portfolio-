import React from 'react';

const Skills = () => {
  return (
    <div style={{background:'#eaeffe'}}>
      <div id='skill'  className="container-fluid d-flex justify-content-center align-items-center p-5">
      <div className="container mt-5">
  <h2 className="text-center mb-4">Skills & Certifications</h2>

  <div className="row">

    {/* Technical Skills */}
    <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">Technical Skills</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">HTML, CSS, Bootstrap, JavaScript</li>
                  <li className="list-group-item">Responsive Web Design</li>
                  <li className="list-group-item">MongoDB, Express, React, Node.js (MERN)</li>
                  <li className="list-group-item">SQL – Database Management</li>
                </ul>
              </div>
            </div>
          </div>

    {/* Languages */}
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">Languages</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">English – Intermediate</li>
            <li className="list-group-item">Kannada – Fluent</li>
            <li className="list-group-item">Telugu – Fluent</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Certifications */}
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">Certifications</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Frontend Development (Aug 2025 – Oct 2025)
            </li>
            <li className="list-group-item">
              MERN Fullstack Development (Oct 2025 – Jan 2026)
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
    </div>
  );
}

export default Skills;
