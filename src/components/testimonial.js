import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonial() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const testimonials = [
    {
      name: "Dr. Manish Gautam",
      position: "Professor (University Of Allahabad)",
      image: "img/testimonial-1.jpg",
      message:
        "We thank Nainoo Dairy for providing authentic, natural milk and high-quality products. Your commitment to purity and excellence promotes healthier lives. Wishing Nainoo Dairy continued success and growth!",
      align: "center",
    },
    {
      name: "Ambrish Sharma",
      position: "Sr. Assistant (UP Police)",
      image: "img/testimonial-2.jpg",
      message:
        "Nainoo Dairy delivers fresh, natural milk with exceptional quality and taste. Their commitment to excellence is truly commendable. The milk's rich flavor and purity make it a top choice.",
      align: "center",
    },
    {
      name: "Ashwini Shukla",
      position: "Engineer",
      image: "img/testimonial-3.jpg",
      message:
        "Nice quality milk. I've been using Nainoo Dairy's milk for over a year, and the quality remains consistently excellent. The milk's purity and taste are outstanding, reflecting their unwavering commitment to high standards.",
      align: "center",
    },
    {
      name: "Kavita Singh",
      position: "Asst. Professor (University Of Allahabad)",
      image: "img/testimonial-4.jpg",
      message:
        "I have been consuming Nainoo dairy products for two years, relying on their milk, soft cottage cheese, and aromatic ghee for taste and purity during pregnancy and now for my baby’s nutrition.",
      align: "left",
    },
    {
      name: "Dr. Namrata Jaiswal",
      position: "Dental Surgeon",
      image: "img/testimonial-5.jpg",
      message:
        "Nainoo provides good, pure-quality cow milk and the best paneer. I’m very satisfied with their milk quality and reliable delivery, making them my trusted choice for daily dairy needs.",
      align: "left",
    },
  ];

  return (
    <div>
      {/* Testimonial Start */}
      <div className="container-fluid py-5 bg-light" style={{ margin: "45px 0" }}>
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
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-item text-center"
                  style={{ margin: "0 15px" }}
                >
                  <div className="position-relative mb-4">
                    <img
                      className="img-fluid mx-auto"
                      src={testimonial.image}
                      alt={`testimonial-${index}`}
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "5px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p
                    className="text-dark"
                    style={{ textAlign: testimonial.align }}
                  >
                    {testimonial.message}
                  </p>
                  <hr className="w-30 mx-auto" />
                  <h5 className="text-uppercase text-dark">{testimonial.name}</h5>
                  <span className="text-dark">{testimonial.position}</span>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Testimonial;
