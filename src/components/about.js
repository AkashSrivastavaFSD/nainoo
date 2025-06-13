import React from "react";

function About() {
  return (
    <div>
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
    </div>
  );
}

export default About;
