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

  return (
    <div className="w-full relative overflow-hidden shadow-lg aspect-video max-h-[600px]">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 hover:bg-black/70 z-10 text-xl"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 hover:bg-black/70 z-10 text-xl"
      >
        ›
      </button>
    </div>
  );
}

export default Photos;
