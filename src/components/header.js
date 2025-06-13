import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>NAINOO - A Dairy Website</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta
        name="keywords"
        content="Dairy Products, Fresh Milk, Organic Milk, Cow Milk, Buffalo Milk, Paneer, Ghee, Yogurt"
      />
      <meta
        name="description"
        content="NAINOO offers a wide range of high-quality dairy products, including fresh milk, paneer, ghee, and more."
      />

      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />

      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />

      {/* Icon Font Stylesheet */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="lib/flaticon/font/flaticon.css" rel="stylesheet" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Libraries Stylesheet */}
      <link
        href="lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />

      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />

      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Topbar Start */}
      <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-1">
            <div className="d-inline-flex align-items-center">
              <i
                className="bi bi-geo-alt fs-1 text-primary me-3"
                aria-hidden="true"
              ></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>Mavaiya TSL Naini Prayagraj 211010, Uttar Pradesh</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-1">
            <div className="d-inline-flex align-items-center">
              <i
                className="bi bi-envelope-open fs-1 text-primary me-3"
                aria-hidden="true"
              ></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>nainoodairy@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-1">
            <div className="d-inline-flex align-items-center">
              <i
                className="bi bi-phone-vibrate fs-1 text-primary me-3"
                aria-hidden="true"
              ></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call and WhatsApp Us</h6>
                <span>+91 6393037429</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <img
              src="/img/icon.svg"
              alt="NAINOO Logo"
              style={{ width: "110px", height: "60px", marginRight: "5px" }}
              onError={(e) => {
                e.target.src = "/img/fallback-logo.svg"; // Fallback logo
              }}
            />
            NAINOO
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About Us
            </Link>
            <Link to="/product" className="nav-item nav-link">
              Products
            </Link>
            <Link to="/team" className="nav-item nav-link">
              Our Team
            </Link>
            <Link to="/gallery" className="nav-item nav-link">
              Gallery
            </Link>
            <Link to="/testimonial" className="nav-item nav-link">
              Testimonial
            </Link>
            <Link
              to="/contact"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Contact <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
}

export default Header;