import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Team() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const teamData = [
    {
      name: "Vikas Kumar Pal",
      role: "CEO & Founder",
      image: "/img/team-1.jpg",
      insta: "https://www.instagram.com/vikaskumarpal0?igsh=MTR3d2FtMjdlaHpubg==",
      fb: "https://www.facebook.com/share/1AStvycSNe/",
    },
    {
      name: "Harsh Vardhan Singh",
      role: "Co-Founder & MD",
      image: "/img/team-2.jpg",
      insta: "#",
      fb: "#",
    },
    {
      name: "Mukesh Gaur",
      role: "Delivery & Procurement",
      image: "/img/team-3.jpg",
      insta: "#",
      fb: "#",
    },
    {
      name: "L.B Pal",
      role: "Investor",
      image: "/img/team-4.jpg",
      insta: "#",
      fb: "#",
    },
  ];

  return (
    <div>
      {/* Team Start */}
      <div className="container mt-5">
        <div className="pb-3">
          <div className="border-start border-5 border-primary ps-3 mb-3">
            <h6 className="text-primary text-uppercase">Our Team</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Meet The Best Team
            </h1>
          </div>
        </div>

        <div className="team-box">
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {teamData.map((member, index) => (
              <div
                key={index}
                className="team-member position-relative bg-light d-flex flex-column text-center"
                style={{ margin: "0 30px", borderRadius: "12px", padding: "1rem" }}
              >
                <img
                  className="img-fluid mb-3 rounded"
                  src={member.image}
                  alt={member.name}
                />
                <h5 className="text-uppercase mb-1">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
                <div className="social-links d-flex justify-content-center mt-2">
                  <Link to={member.insta} target="_blank" className="me-3">
                    <i className="fab fa-instagram fa-2x" style={{ transition: "0.3s" }}></i>
                  </Link>
                  <Link to={member.fb} target="_blank">
                    <i className="fab fa-facebook fa-2x" style={{ transition: "0.3s" }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
}

export default Team;
