import React from "react";
import Footer from "./Footer";

function Residential() {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative overflow-hidden shadow-lg aspect-video max-h-[600px]">
        <img
          src="/House1.webp"
          alt="Commercial Project"
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
    <div className="mt-[2%] px-[5%] text-center flex flex-col text-black font-light text-[clamp(12px,1.5vw,20px)]">
        <span>At McGeehan Construction, we specialize in delivering high-quality commercial</span>
        <span>projects tailored to meet the unique needs of businesses. From modern</span>
        <span>office spaces to retail renovations, we bring expertise,</span>
        <span>precision, and reliability to every job.</span>
      </div>
      <div className="flex flex-col items-center mt-[4%] mb-[3%]">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[2vw] w-full px-[5%]">
          <img
            src="/House1.webp"
            alt="Commercial Project 1"
            className="w-[90%] sm:w-[30%] aspect-video object-cover rounded-md shadow-md"
          />
          <img
            src="/House2.webp"
            alt="Commercial Project 2"
            className="w-[90%] sm:w-[30%] aspect-video object-cover rounded-md shadow-md"
          />
          <img
            src="/House3.webp"
            alt="Commercial Project 3"
            className="w-[90%] sm:w-[30%] aspect-video object-cover rounded-md shadow-md"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Residential;
