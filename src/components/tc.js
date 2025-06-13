import React, { useEffect } from "react";

function Tc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Terms and Conditions Start */}
      <div className="container mt-5">
        <div className="pb-3">
          <div className="border-start border-5 border-primary ps-3 mb-3">
            <h6 className="text-primary text-uppercase">Terms & Conditions</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Your Trust, Our Commitment
            </h1>
          </div>
        </div>

        <section className="tc-box">
          {/* Section 1 */}
          <article className="tc-section bg-light p-4 mb-4">
            <h5 className="text-uppercase text-primary">1. Product Quality</h5>
            <p className="mb-0">
              Nainoo ensures the highest quality standards for all its products and services. 
              If you experience any issues, please reach out to us.
            </p>
          </article>

          {/* Section 2 */}
          <article className="tc-section bg-light p-4 mb-4">
            <h5 className="text-uppercase text-primary">2. Usage Restrictions</h5>
            <p className="mb-0">
              All services are intended for personal use only. Unauthorized usage is strictly prohibited.
            </p>
          </article>

          {/* Section 3 */}
          <article className="tc-section bg-light p-4 mb-4">
            <h5 className="text-uppercase text-primary">3. Service Availability</h5>
            <p className="mb-0">
              While we strive to maintain the availability of our services at all times, 
              Nainoo does not guarantee uninterrupted access. We reserve the right to modify or discontinue services without prior notice.
            </p>
          </article>

          {/* Section 4 */}
          <article className="tc-section bg-light p-4 mb-4">
            <h5 className="text-uppercase text-primary">4. Intellectual Property</h5>
            <p className="mb-0">
              All content, including logos, images, and text, is owned by Nainoo and protected under copyright laws.
            </p>
          </article>

          {/* Section 5 */}
          <article className="tc-section bg-light p-4">
            <h5 className="text-uppercase text-primary">5. Updates to Terms</h5>
            <p className="mb-0">
              Nainoo reserves the right to modify these terms at any time. 
              Please check this page regularly for updates.
            </p>
          </article>
        </section>
      </div>
      {/* Terms and Conditions End */}
    </div>
  );
}

export default Tc;
