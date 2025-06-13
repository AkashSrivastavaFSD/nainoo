import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSwipeable } from "react-swipeable";

const images = [
  "/img/product-1.jpg",
  "/img/Gallery.jpg",
  "/img/gallery4.jpg",
  "/img/gallery2.jpg",
  "/img/mathani2.jpg",
  "/img/gallery5.jpg",
  "/img/gallery1.jpg",
  "/img/gallery3.jpg",
  "/img/gallery8.jpg",
  "/img/gallery9.jpg",
  "/img/gallery7.jpg",
  "/img/gallery10.jpg",
  "/img/gallery11.jpg",
  "/img/gallery12.jpg",
  "/img/gallery13.jpg",
];

function Gallery() {
  const [currentImage, setCurrentImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

  return (
    <div className="container py-5">
      <div className="pb-3">
        <div className="border-start border-5 border-primary ps-3 mb-3">
          <h6 className="text-primary text-uppercase">Gallery</h6>
          <h1 className="display-5 text-uppercase mb-0">
            Freshness Captured: A Visual Journey
          </h1>
        </div>
      </div>

      <div className="row g-4">
        {images.map((image, index) => (
          <div
            className="col-6 col-md-4 col-lg-4"
            key={index}
            role="button"
            tabIndex="0"
            aria-label={`Open image ${index + 1}`}
            onClick={() => openModal(index)}
            onKeyDown={(e) => e.key === "Enter" && openModal(index)}
          >
            <div
              className="position-relative overflow-hidden"
              style={{ cursor: "pointer" }}
            >
              <img
                src={image}
                loading="lazy"
                alt={`Gallery ${index + 1}`}
                className="img-fluid"
                style={{ transition: "transform 0.3s" }}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          aria-hidden={!isModalOpen}
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-transparent border-0" {...handlers}>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={images[currentImage]}
                  alt={`Gallery ${currentImage + 1}`}
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="modal-footer justify-content-between border-0 position-relative">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#7AB730",
                    color: "white",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                  }}
                  onClick={prevImage}
                  aria-label="Previous Image"
                >
                  &#10094;
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "#7AB730",
                    color: "white",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                  onClick={nextImage}
                  aria-label="Next Image"
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
