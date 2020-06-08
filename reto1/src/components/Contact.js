import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/_Contact.scss';
function Contact()
{
  return(
    <div className="container contact-form">
    <div className="contact-image">
      <img src="https://www.kinanalytics.com/wp-content/uploads/2019/03/kin_whitefinal.png" alt="kinanalytics" />
    </div>
    <form method="post">
      <h3>Drop Us a Message</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" name="txtName" className="form-control" placeholder="Your Name *"  />
          </div>
          <div className="form-group">
            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"  />
          </div>
          <div className="form-group">
            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
          </div>
          <div className="form-group">
            <input type="submit" name="btnSubmit" className="btnContact" value="Send"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}} defaultValue={""} />
          </div>
        </div>
      </div>
    </form>
  </div>
  );
}
  export default Contact