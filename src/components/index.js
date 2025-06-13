import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

function Index() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const whatsAppLink = "https://wa.me/916393037429";

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const desktopImages = ["/img/slider 1.jpg", "/img/slider 2.jpg"];
  const mobileImages = ["/img/mobile size 1.jpg", "/img/mobile size 2.jpg"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Header Carousel */}
      <div className="container-fluid px-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <Slider {...settings}>
              {(isMobile ? mobileImages : desktopImages).map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", height: "70vh" }}
                    onError={(e) => {
                      e.target.src = "/img/fallback.jpg"; // Fallback image
                    }}
                  />
                  <Link
                    to="/product"
                    className="btn btn-primary rounded-pill py-1 px-3"
                    style={{
                      position: "relative",
                      top: "-120px",
                      left: isMobile ? "50%" : "350px",
                      transform: isMobile ? "translateX(-50%)" : "none",
                      marginTop: isMobile ? "-350px" : "0px",
                    }}
                    aria-label="Shop Now"
                  >
                    Shop Now
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* How to Order Section */}
      <div className="container mt-5 mb-5">
        <div
          className="border-start border-5 border-primary ps-3 mb-3"
          style={{ maxWidth: "400px" }}
        >
          <h6 className="text-primary text-uppercase">How to Order</h6>
          <h5>We Accept Orders Through WhatsApp Only</h5>
        </div>
        <Marquee style={{ color: "red" }}>
          To place an order, click on the "Order Now" button below any product.
          You will be redirected to our WhatsApp number for further assistance.
        </Marquee>
      </div>

      {/* Products Section */}
      <div className="container mb-5">
        <div className="pb-3">
          <div className="border-start border-5 border-primary ps-3 mb-3">
            <h6 className="text-primary text-uppercase">Our Products</h6>
            <h2 className="display-5 text-uppercase mb-0">
              Gently Guiding You Towards Nature and Purity.
            </h2>
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "red",
              fontStyle: "revert-layer",
              marginTop: "10px",
            }}
          >
            *Prices May Vary
          </p>
        </div>
        <Carousel responsive={responsive}>
          {[
            {
              img: "/img/product-1.jpg",
              name: "Buffallo's Milk",
              desc: "High Quality Milk",
              price: "₹65/ltr",
            },
            {
              img: "/img/product-2.jpg",
              name: "Desi Ghee 500mL",
              desc: "Premium Ghee",
              price: "₹999",
            },
            {
              img: "/img/product-3.jpg",
              name: "Desi Ghee 5 litre",
              desc: "Premium Ghee",
              price: "₹8800",
            },
            {
              img: "/img/product-4.jpg",
              name: "Desi Ghee 1 litre",
              desc: "Premium Ghee",
              price: "₹1899",
            },
            {
              img: "/img/product-6.jpg",
              name: "Nainoo Cow's Milk",
              desc: "High Quality Milk.",
              price: "₹55/ltr",
            },
            {
              img: "/img/product-7.jpg",
              name: "Nainoo Fresh Paneer",
              desc: "High Quality Paneer",
              price: "₹350/kg",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="product-item position-relative bg-light d-flex flex-column text-center"
              style={{ margin: "0 40px" }}
            >
              <img
                className="img-fluid mb-3"
                src={product.img}
                alt={product.name}
                onError={(e) => {
                  e.target.src = "/img/fallback.jpg"; // Fallback image
                }}
              />
              <h6 className="text-uppercase">{product.name}</h6>
              <span>{product.desc}</span>
              <div className="text-primary mb-0">{product.price}</div>
              <div
                className="mt-2"
                style={{
                  fontSize: "14px",
                  color: "#7AB730",
                  fontWeight: "bold",
                  lineHeight: "1.5",
                }}
              >
                100% Natural | No Chemicals Added <br />
                FSSAI Approved | Lab Tested
              </div>
              <a
                href={whatsAppLink}
                className="btn text-white mt-2"
                style={{
                  backgroundColor: "#7AB730",
                  borderRadius: "5px",
                }}
                aria-label={`Order ${product.name}`}
              >
                Order Now
              </a>
            </div>
          ))}
        </Carousel>
      </div>
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="img/about3.jpg"
                  alt="About Us - Nainoo Dairy Products"
                  style={{ objectFit: "fill" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-3 mb-3">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">
                  Taste You Love, Health You Trust, Price You Appreciate.
                </h1>
              </div>
              <div>
                <h2>Who We Are?</h2>
              </div>
              <p className="mb-4 text-black">
                A homegrown brand, Nainoo is your trusted name for premium dairy
                products. We take immense pride in delivering the purest and
                highest-quality dairy products to our valued customers. Since
                our inception in 2022, we have been serving the community in
                Prayagraj, earning the reputation of being the most reliable
                provider of fresh and authentic dairy products in the region.
              </p>

              <div className="bg-light p-4 mb-4">
                <h5 className="text-uppercase text-primary">Our Mission</h5>
                <p className="mb-0">
                  To provide fresh, high-quality dairy products like Milk, Ghee,
                  Paneer, and Fresh Cream directly from farm to table, ensuring
                  health, purity, and sustainability for our customers while
                  supporting local farmers.
                </p>
              </div>
              <div className="bg-light p-4">
                <h5 className="text-uppercase text-primary">Our Vision</h5>
                <p className="mb-0">
                  To be a trusted leader in the dairy industry, delivering
                  nutrition, fostering community well-being, and promoting
                  environmentally conscious practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* FAQ Start */}
      <div className="container mt-5">
        <div className="pb-3">
          <div className="border-start border-5 border-primary ps-3 mb-3">
            <h6 className="text-primary text-uppercase">FAQ</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Frequently Asked Questions
            </h1>
          </div>
        </div>

        <div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="faqHeading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse1"
                  aria-expanded="true"
                  aria-controls="faqCollapse1"
                >
                  What is Nainoo Milk?
                </button>
              </h2>
              <div
                id="faqCollapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="faqHeading1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Nainoo Milk is a high-quality, odorless milk that offers rich
                  taste and essential nutrients. It is carefully processed to
                  meet daily dietary needs, making it ideal for families.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="faqHeading2">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse2"
                  aria-expanded="false"
                  aria-controls="faqCollapse2"
                >
                  Why Nainoo Desi Ghee?
                </button>
              </h2>
              <div
                id="faqCollapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Nainoo Desi Ghee is made using traditional methods, ensuring
                  exceptional purity and a rich, authentic flavor. It is
                  nutrient-packed and enhances the taste of meals, making it a
                  wholesome choice.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="faqHeading3">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse3"
                  aria-expanded="false"
                  aria-controls="faqCollapse3"
                >
                  How should I store Nainoo Ghee?
                </button>
              </h2>
              <div
                id="faqCollapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  To maintain freshness, store Nainoo Ghee in a cool, dry place,
                  away from direct sunlight. Proper storage ensures its rich
                  taste and quality remain intact for an extended period.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="faqHeading4">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapse4"
                  aria-expanded="false"
                  aria-controls="faqCollapse4"
                >
                  Are Nainoo Dairy products free from additives and
                  preservatives?
                </button>
              </h2>
              <div
                id="faqCollapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faqHeading4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, Nainoo Dairy products are 100% free from additives and
                  preservatives, ensuring pure, natural, and healthy goodness in
                  every drop.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Faq-description">
          <p>Still have questions ?</p>
        </div>
        <div className="contact-button-wrapper">
          <Link to="/contact">
            <button className="contact-button bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:opacity-90">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      {/* FAQ End */}

      {/* Testimonial Section */}
      <div
        className="container-fluid bg-testimonial py-5 bg-light"
        style={{ margin: "45px 0" }}
      >
        <div className="container py-5">
          <div className="pb-3">
            <div className="border-start border-5 border-primary ps-3 mb-3">
              <h6 className="text-primary text-uppercase">Testimonial</h6>
              <h1 className="display-5 text-uppercase mb-0">
                See What Our Clients Say ..!
              </h1>
            </div>
          </div>
          <div className="testimonial-box">
            <Carousel responsive={responsive}>
              {[
                {
                  img: "img/testimonial-1.jpg",
                  text: "We thank Nainoo Dairy for providing authentic, natural milk and high-quality products. Your commitment to purity and excellence promotes healthier lives. Wishing Nainoo Dairy continued success and growth!",
                  name: "Dr. Manish Gautam",
                  title: "Professor (University Of Allahabad)",
                },
                {
                  img: "img/testimonial-2.jpg",
                  text: "Nainoo Dairy delivers fresh, natural milk with exceptional quality and taste. Their commitment to excellence is truly commendable. The milk's rich flavor and purity make it a top choice.",
                  name: "Ambrish Sharma",
                  title: "Sr. Assistant (UP Police)",
                },
                {
                  img: "img/testimonial-3.jpg",
                  text: "Nice quality milk. I've been using Nainoo Dairy's milk for over a year, and the quality remains consistently excellent. The milk's purity and taste are outstanding, reflecting their unwavering commitment to high standards.",
                  name: "Ashwini Shukla",
                  title: "Engineer",
                },
                {
                  img: "img/testimonial-4.jpg",
                  text: "I have been consuming Nainoo dairy products for two years, relying on their milk, soft cottage cheese, and aromatic ghee for taste and purity during pregnancy and now for my baby’s nutrition.",
                  name: "Kavita Singh",
                  title: "Asst. Professor (University Of Allahabad)",
                },
                {
                  img: "img/testimonial-5.jpg",
                  text: "Nainoo provides good, pure-quality cow milk and the best paneer. I’m very satisfied with their milk quality and reliable delivery, making them my trusted choice for daily dairy needs.",
                  name: "Dr. Namrata Jaiswal",
                  title: "Dental Surgeon",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-item text-center"
                  style={{ margin: "0 15px" }}
                >
                  <div className="position-relative mb-4">
                    <img
                      className="img-fluid mx-auto"
                      src={testimonial.img}
                      alt={`Testimonial ${index + 1}`}
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "5px",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.src = "/img/fallback.jpg"; // Fallback image
                      }}
                    />
                  </div>
                  <p className="text-dark" style={{ textAlign: "left" }}>
                    {testimonial.text}
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase text-dark">
                    {testimonial.name}
                  </h5>
                  <span className="text-dark">{testimonial.title}</span>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
