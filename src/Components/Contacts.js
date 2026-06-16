import React from 'react';

const Contacts = () => {
  return (
    <div style={{backgroundColor:'#eaeffe'}}>
      <div className="container-fluid  p-5 ">
       <div id="contact" className="container mb-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4 rounded-4">
            
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" required
                  placeholder="Enter your name" 
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" required
                  placeholder="Enter your email" 
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-control" required
                  rows="4" 
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contacts;
