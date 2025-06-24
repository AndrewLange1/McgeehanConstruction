import React from "react";
import Footer from "./Footer";

function Residential() {
  return (
    <>
      <div className="w-full relative overflow-hidden shadow-lg aspect-video max-h-[600px]">
        <img
          src="/House1.webp"
          alt="Residential Project"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex justify-center items-end pb-[1px]">
          <div className="px-6 py-3 rounded-md">
            <span className="text-white text-[clamp(18px,3vw,36px)] font-light">
              RESIDENTIAL PROJECTS
            </span>
          </div>
        </div>
      </div>
      <div className="hidden med:flex flex-col items-center mt-[3%] px-[8%] text-center text-black font-light text-[clamp(16px,2vw,23px)] leading-relaxed">
        <span>At McGeehan Construction, we specialize in delivering high-quality residential projects</span>
        <span>that reflect the comfort and style homeowners envision. Whether it's a new build,</span>
        <span>a remodel, or custom upgrades, we ensure every detail meets your expectations.</span>
      </div>
      <div className="med:hidden block mt-[5%] px-[10%] text-center text-black font-light text-[clamp(16px,3vw,20px)] leading-relaxed">
        <p>
          At McGeehan Construction, we specialize in delivering high-quality residential projects that reflect the comfort and style homeowners envision. Whether it's a new build, a remodel, or custom upgrades, we ensure every detail meets your expectations.
        </p>
      </div>

      {/* Image section */}
      <div className="flex flex-col items-center mt-[5%] mb-[3%]">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[2vw] w-full px-[5%]">
          <img
            src="/House1.webp"
            alt="Residential Project 1"
            className="w-[90%] sm:w-[30%] aspect-video object-cover rounded-md shadow-md"
          />
          <img
            src="/House2.webp"
            alt="Residential Project 2"
            className="w-[90%] sm:w-[30%] aspect-video object-cover rounded-md shadow-md"
          />
          <img
            src="/House3.webp"
            alt="Residential Project 3"
            className="w-[90%] sm:w-[30%] aspect-video object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Residential;
