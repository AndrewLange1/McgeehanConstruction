import React, { useState, useEffect } from "react";

function Photos() {
  const images = ["/House1.webp", "/House2.webp", "/House3.webp"];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 50);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 50);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 50);
  };

  const arrowPadding = {
    paddingLeft: "clamp(0.25rem, 0.5vw, 0.5rem)",
    paddingRight: "clamp(0.25rem, 0.5vw, 0.5rem)",
    paddingTop: "clamp(0.15rem, 0.3vw, 0.3rem)",
    paddingBottom: "clamp(0.15rem, 0.3vw, 0.3rem)",
  };

  return (
    <div className="w-full relative overflow-hidden shadow-lg aspect-video max-h-[600px] group">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
      <button
        onClick={goToPrevious}
        style={arrowPadding}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/0 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10 rounded text-[clamp(3rem,6vw,5rem)] 
          hover:scale-125 transition-transform duration-300 ease-in-out"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        style={arrowPadding}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/0 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10 rounded text-[clamp(3rem,6vw,5rem)] 
          hover:scale-125 transition-transform duration-300 ease-in-out"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}

export default Photos;
