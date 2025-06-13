import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid mt-5 py-3 bg-light">
        <div className="container pt-5">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Get In Touch
              </h5>
              <p>Have questions or need assistance? We're here to help!</p>
              <p>
                <i className="bi bi-geo-alt text-primary me-2"></i>
                Mavaiya TSL, Naini, Prayagraj – 211010, UP
              </p>
              <p>
                <i className="bi bi-envelope-open text-primary me-2"></i>
                nainoodairy@gmail.com
              </p>
              <p>
                <i className="bi bi-telephone text-primary me-2"></i>+91 6393037429
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Quick Links
              </h5>
              <div className="d-flex flex-column">
                <Link to="/" className="text-body mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </Link>
                <Link to="/about" className="text-body mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>About Us
                </Link>
                <Link to="/product" className="text-body mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our Product
                </Link>
                <Link to="/team" className="text-body mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team
                </Link>
                <Link to="/contact" className="text-body">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact Us
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="col-lg-2 col-md-6">
              <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a
                  className="btn btn-outline-primary btn-square me-2"
                  href="https://www.facebook.com/share/12EM7wyAqTN/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="btn btn-outline-primary btn-square"
                  href="https://www.instagram.com/nainoomilk?igsh=Z2dwdnozM3FvOHZw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-lg-4 col-md-6">
              <iframe
                className="w-100 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28307.79952772266!2d81.86956410000001!3d25.4287865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397b7714f57b51f7%3A0x122d7e1e9efca5ea!2sMavaiya%2C%20Naini%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211304!5e0!3m2!1sen!2sin!4v1673707199123!5m2!1sen!2sin"
                frameBorder="0"
                style={{ height: "205px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Nainoo Dairy Location"
              ></iframe>
            </div>

            {/* Footer Nav */}
            <div className="col-12 text-center text-body mt-4">
              <Link className="text-body" to="/tc">
                Terms & Conditions
              </Link>
              <span className="mx-2">|</span>
              <Link to="/contact" className="text-body">
                Customer Support
              </Link>
              <span className="mx-2">|</span>
              <Link className="text-body" to="/faq">
                FAQ's
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid bg-dark text-white-50 py-3">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                © 2025{" "}
                <Link to="/" className="text-white text-decoration-none">
                  NAINOO
                </Link>
                . All Rights Reserved.
              </p>
              {/* Uncomment below to show credits */}
              {/* <p className="mb-0">Created by <a href="https://akashsrivastavafsd.github.io/" className="text-white">Akash Srivastava</a>.</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
  href="https://wa.me/916393037429"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    backgroundColor: "#25d366",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
  }}
>
  <i className="bi bi-whatsapp"></i>
</a>

    </div>
  );
}

export default Footer;
