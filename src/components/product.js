import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";

function Product() {
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

  const products = [
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
  ];

  return (
    <div>
      {/* How to order section */}
      <div className="container mt-5 mb-5">
        <div
          className="border-start border-5 border-primary ps-3 mb-3"
          style={{ maxWidth: "400px" }}
        >
          <h6 className="text-primary text-uppercase">How to Order</h6>
          <h5>We Accept Orders Through WhatsApp Only</h5>
        </div>
        <p>
          <Marquee style={{ color: "red" }}>
            To place an order, click on the "Order Now" button below any product.
            You will be redirected to our WhatsApp number for further assistance.
          </Marquee>
        </p>
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
              fontStyle: "italic",
              marginTop: "10px",
            }}
          >
            *Prices May Vary
          </p>
        </div>

        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {products.map((product, index) => (
            <div
              key={index}
              className="product-item position-relative bg-light d-flex flex-column text-center p-3 mx-2"
            >
              <img
                className="img-fluid mb-3"
                src={product.img}
                alt={product.name}
              />
              <h6 className="text-uppercase">{product.name}</h6>
              <span>{product.desc}</span>
              <div className="text-primary mb-1">{product.price}</div>
              <div
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
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Product;
