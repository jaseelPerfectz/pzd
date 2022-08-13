import React from "react";
import PropTypes from "prop-types";
import ContactUsForm from "../../forms/ContactUsForm";

const ContactUsSection = () => {
  return (
    <div className="section-9">
      <div className="container">
        <div className="text-1">Contact Us</div>
        <div className="row justify-content-between">
          <div className="col col-12 col-sm-6">
            <ContactUsForm />
          </div>
          <div className="col-sm-6 d-none d-sm-block">
            <div className="contact-image">
              <img src="assets/images/mail.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
