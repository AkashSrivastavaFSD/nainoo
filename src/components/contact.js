import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7cff3fb1-b192-456f-8edc-44f93d6747ba");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const response = await res.json();
      if (response.success) {
        console.log("Success", response);
        alert("Message sent successfully!");

        // Reset form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error", response);
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error", error);
      alert("An error occurred while sending the message.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Contact Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">Contact Us</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-7">
              <form onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      required
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      required
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="8"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="bg-light mb-5 p-8">
                <div className="d-flex align-items-center mb-2 ps-3">
                  <i
                    className="bi bi-geo-alt fs-1 text-primary me-3"
                    aria-hidden="true"
                  ></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1 mt-2">Our Office</h6>
                    <address>
                      Mavaiya TSL Naini Prayagraj 211010, Uttar Pradesh
                    </address>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2 ps-3">
                  <i
                    className="bi bi-envelope-open fs-1 text-primary me-3"
                    aria-hidden="true"
                  ></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Email Us</h6>
                    <a
                      href="mailto:nainoodairy@gmail.com"
                      className="text-decoration-none text-dark"
                    >
                      nainoodairy@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4 ps-3">
                  <i
                    className="bi bi-whatsapp fs-1 me-3 light-green-icon"
                    aria-hidden="true"
                  ></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">
                      Call and WhatsApp Us
                    </h6>
                    <a
                      href="https://wa.me/916393037429"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      +91 6393037429
                    </a>
                  </div>
                </div>

                <div>
  <iframe
    title="Google Maps location of Nainoo Dairy"
    className="position-relative w-100"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28307.79952772266!2d81.86956410000001!3d25.4287865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397b7714f57b51f7%3A0x122d7e1e9efca5ea!2sMavaiya%2C%20Naini%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211304!5e0!3m2!1sen!2sin!4v1673707199123!5m2!1sen!2sin"
    frameBorder="0"
    style={{ height: "205px", border: "0" }}
    allowFullScreen
    aria-hidden="false"
    tabIndex="0"
    aria-label="Google Maps location of Nainoo Dairy"
  ></iframe>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}

export default Contact;