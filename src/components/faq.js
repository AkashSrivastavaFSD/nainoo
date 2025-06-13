// FAQ.js

import { React, useEffect } from "react";
import { Link } from "react-router-dom";

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default FAQ;
