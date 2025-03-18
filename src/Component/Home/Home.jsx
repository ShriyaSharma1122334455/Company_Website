import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import P1 from "../../Assets/P1.jpeg";
import P2 from "../../Assets/P2.jpg";
import P3 from "../../Assets/P3.jpeg";
import P4 from "../../Assets/P4.jpeg";
import P5 from "../../Assets/P5.jpeg";
import "./Home.css"; // Import CSS file

const IMAGES = [
  { src: P1},
  { src: P2},
  { src: P3},
  { src: P4},
  { src: P5},
];

function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setImageIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {IMAGES.map((image, index) => (
        <div
          key={index}
          className={`mySlide fade ${index === imageIndex ? "active" : ""}`}
        >
          <div className="numbertext">{index + 1} / {IMAGES.length}</div>
          <img src={image.src} alt={`Slide ${index + 1}`} className="slider-image" />
          <div className="text">{image.caption}</div>
        </div>
      ))}

      {/* Previous & Next Buttons */}
      <button className="prev" onClick={prevSlide}>
        <ArrowBigLeft size={32} />
      </button>
      <button className="next" onClick={nextSlide}>
        <ArrowBigRight size={32} />
      </button>

      {/* Dots for Navigation */}
      <div className="dots-container">
        {IMAGES.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === imageIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Home;
