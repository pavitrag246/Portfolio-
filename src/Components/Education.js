import React from 'react';

const Education = () => {
  return (
    <div style={{background:'#eaeffe'}}>
      <div id='education' className="container-fluid d-flex justify-content-center align-items-center p-5 ">
    <div className="container">
  <h2 className="text-center mb-4">Education</h2>

  {/* BCA */}
  <div className="card shadow-sm mb-3">
    <div className="card-body">
      <h5 className="card-title text-primary">
        Bachelor of Computer Applications (BCA)
      </h5>
      <p className="mb-1">
        SMES'S Abdul Kalam College, Gadag - 2025
      </p>
      <span className="badge bg-success">CGPA: 8.0</span>
    </div>
  </div>

  {/* PUC */}
  <div className="card shadow-sm mb-3">
    <div className="card-body">
      <h5 className="card-title text-primary">PUC (Commerce)</h5>
      <p className="mb-1">
        J A Comp PU College, Mundargi - 2022
      </p>
      <span className="badge bg-info">80%</span>
    </div>
  </div>

  {/* 10th */}
  <div className="card shadow-sm">
    <div className="card-body">
      <h5 className="card-title text-primary">10th Grade</h5>
      <p className="mb-1">
        Morarji Desai Residential School, Hirewaddatti - 2020
      </p>
      <span className="badge bg-warning text-dark">83%</span>
    </div>
  </div>

</div>

</div>
    </div>
  );
}

export default Education;
