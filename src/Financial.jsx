import React from "react";
import Footer from "./Footer";

function Financial() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full relative overflow-hidden shadow-lg aspect-video flex-shrink-0 min-h-[200px] max-h-[350px]">
        <img
          src="/bank.webp"
          alt="Commercial Project"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-[10px] flex justify-center">
          <div className="px-6 bg-transparent">
            <span className="text-white text-[clamp(18px,3vw,36px)] font-light leading-none">
              FINANCIAL OPPORTUNITIES
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-[5%] text-center text-black font-light max-w-[900px] mx-auto py-6 flex-grow">
        {/* Large screen content */}
        <div className="hidden smal:flex flex-col text-[clamp(15px,2vw,20px)] gap-3 px-4 max-w-[900px] mt-[5%] mx-auto">
          <span>We are proud to partner with local financial institutions to help make your</span>
          <span>vision a reality. Through our collaboration with <strong>Community First Bank</strong>,</span>
          <span>we’re able to provide flexible financing options, streamlined approval</span>
          <span>processes, and personalized guidance for every step of your project.</span>
          <button className="flex flex-row justify-center items-center mt-[5%] bg-dark-blue cursor-pointer text-white h-[80px] w-[400px] rounded-md text-[21px] hover:bg-dark-blue/80 mx-auto px-5 gap-3">
            <span>Learn More About Financing</span>
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="text-white h-[45%] w-[10%]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="512,261.5 298.7,90.8 298.7,218.8 0,218.8 0,304.2 298.7,304.2 298.7,432.2" />
            </svg>
          </button>
        </div>

        {/* Small screen content */}
        <div className="flex smal:hidden flex-col text-[clamp(15px,1.6vw,18px)] gap-3 mt-[5%] px-4 max-w-[900px] mx-auto">
          <span>We are proud to partner with local financial</span>
          <span>institutions to help make your vision a reality.</span>
          <span>Through our collaboration with <strong>Community First Bank</strong>,</span>
          <span>we’re able to provide flexible financing options,</span>
          <span>streamlined approval processes, and</span>
          <span>personalized guidance for every step of your project.</span>
          <button className="mt-6 bg-dark-blue cursor-pointer text-white h-[80px] w-[300px] rounded-md text-[19px] hover:bg-dark-blue/80 mx-auto px-5">
            Learn More About Financing
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Financial;
