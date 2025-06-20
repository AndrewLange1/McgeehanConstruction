import React from "react";
import './index.css'
import { useNavigate } from "react-router-dom";

function Specialties() {
  const navigate = useNavigate();

  return (
    <div className="font-display text-black text-center items-center mt-[2%] font-light flex flex-col">
      <div style={{ fontSize: "clamp(14px, 2.5vw, 40px)" }}>
        OUR SPECIALTIES
      </div>

      <div className="mt-[4%] text-white flex flex-col med:flex-row med:px-[2%] gap-[2%] items-center justify-between w-full">
        {/* RESIDENTIAL */}
        <button className="bg-dark-blue h-[35vw] med:h-[30vw] w-[95%] med:w-[30%] rounded-[10px] med:rounded-[2px] flex flex-col justify-start items-center pt-[1%] px-[2%]">
          <span className="text-[clamp(11px,2.5vw,23px)] med:text-[clamp(13px,1.5vw,30px)]">
            RESIDENTIAL
          </span>
          <div className="flex flex-col mt-[3%] gap-[0.5%] text-center text-[clamp(10px,2vw,20px)] med:hidden">
            <span>
              From custom home builds to remodels, we deliver tailored solutions that turn
            </span>
            <span>
              your vision into reality. Our team ensures every detail reflects your unique style,
            </span>
            <span>
              with craftsmanship that stands the test of time and comfort that feels like home.
            </span>
            <span>
              We work closely with you every step of the way — from planning to move-in day.
            </span>
            <button
              onClick={() => navigate("/residential")}
              className="hover:bg-off-white/80 cursor-pointer bg-off-white flex flex-row mt-[3%] mx-auto h-[10vw] w-[65%] rounded-[8px] text-[clamp(7px,2.3vw,25px)] text-black items-center justify-center"
            >
              <span>CLICK HERE TO LEARN MORE</span>
              <img src="right-arrow.svg" className="h-[45%] ml-[5%] text-white" />
            </button>
          </div>
          <div className="hidden med:flex flex-col mt-[6%] gap-[0.5%] text-center text-[clamp(7px,1.2vw,20px)]">
            <span>From custom home builds to remodels, we</span>
            <span>deliver tailored solutions that turn your</span>
            <span>Vision into reality. Our team ensures</span>
            <span>every detail reflects your unique style with</span>
            <span>craftsmanship that stands the test of</span>
            <span>time and comfort that feels like home. We</span>
            <span>work closely with you every step of the</span>
            <span>way - from planning to move-in day.</span>
          </div>
          <div
            onClick={() => navigate("/residential")}
            className="hidden med:flex hover:bg-off-white/80 cursor-pointer bg-off-white flex-row mt-[8%] h-[7vw] w-[70%] rounded-[8px] text-[clamp(7px,1.6vw,25px)] text-black items-center justify-center "
          >
            <span>LEARN MORE</span>
            <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
          </div>
        </button>

        <div className="block h-[5px] w-screen bg-white med:hidden" />

        {/* COMMERCIAL */}
        <button className="bg-dark-blue h-[35vw] med:h-[30vw] w-[95%] med:w-[30%] rounded-[10px] med:rounded-[2px] flex flex-col items-center pt-[1%] px-[2%]">
          <span className="text-[clamp(11px,2.5vw,23px)] med:text-[clamp(13px,1.5vw,30px)]">
            COMMERCIAL
          </span>
          <div className="flex flex-col mt-[3%] gap-[0.5%] text-center text-[clamp(10px,2vw,20px)] med:hidden">
            <span>
              We specialize in commercial spaces that balance functionality with aesthetic impact.
            </span>
            <span>
              Whether it’s an office, retail space, or hospitality venue, we build with precision
            </span>
            <span>
              and efficiency to meet your deadlines, budgets, and business goals. Partner with
            </span>
            <span>
              us for reliable, scalable, and professional construction results.
            </span>
            <button
              onClick={() => navigate("/commercial")}
              className="hover:bg-off-white/80 cursor-pointer bg-off-white flex flex-row mt-[3%] mx-auto h-[10vw] w-[65%] rounded-[8px] text-[clamp(7px,2.3vw,25px)] text-black items-center justify-center"
            >
              <span>CLICK HERE TO LEARN MORE</span>
              <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
            </button>
          </div>
          <div className="hidden med:flex flex-col mt-[6%] gap-[0.5%] text-center text-[clamp(7px,1.2vw,20px)]">
            <span>We specialize in commercial spaces that</span>
            <span>balance funtionality with aesthetic impact.</span>
            <span>Whether it's an office, retail space, or</span>
            <span>hospitality venue, we build with precision</span>
            <span>and efficiency to meet your deadlines,</span>
            <span>budgets, and business goals. Partner with</span>
            <span>us for reliable, scalable, and professional </span>
            <span>construction results</span>
          </div>
          <div
            onClick={() => navigate("/commercial")}
            className="hidden med:flex hover:bg-off-white/80 cursor-pointer bg-off-white flex-row mt-[8%] h-[7vw] w-[70%] rounded-[8px] text-[clamp(7px,1.6vw,25px)] text-black items-center justify-center "
          >
            <span>LEARN MORE</span>
            <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
          </div>
        </button>

        <div className="block h-[5px] w-screen bg-white med:hidden" />

        {/* NEW CONSTRUCTION */}
        <button className="bg-dark-blue h-[35vw] med:h-[30vw] w-[95%] med:w-[30%] rounded-[10px] med:rounded-[2px] flex flex-col items-center pt-[1%] px-[2%]">
          <span className="text-[clamp(11px,2.5vw,23px)] med:text-[clamp(13px,1.5vw,30px)]">
            NEW CONSTRUCTION
          </span>
          <div className="flex flex-col mt-[3%] gap-[0.5%] text-center text-[clamp(10px,2vw,20px)] med:hidden">
            <span>
              Our new construction services focus on ground-up development tailored to your goals.
            </span>
            <span>
              From permits and foundations to finishing touches, we manage every aspect
            </span>
            <span>
              of the build with precision. Expect transparent communication, budget clarity,
            </span>
            <span>
              and a final product that exceeds expectations.
            </span>
            <button
              onClick={() => navigate("/construction")}
              className="hover:bg-off-white/80 cursor-pointer bg-off-white flex flex-row mt-[3%] mx-auto h-[10vw] w-[65%] rounded-[8px] text-[clamp(7px,2.3vw,25px)] text-black items-center justify-center"
            >
              <span>CLICK HERE TO LEARN MORE</span>
              <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
            </button>
          </div>
          <div className="hidden med:flex flex-col mt-[8%] gap-[0.5%] text-center text-[clamp(7px,1.2vw,20px)]">
            <span>Our new construction services focus on</span>
            <span>ground-up development tailored to your</span>
            <span> goals. From permits and foundations to</span>
            <span>finishing touches, we manage every</span>
            <span>aspect of the build with precision. Expect</span>
            <span>transparent communication, budget clarity,</span>
            <span>and a final product that exceeds</span>
            <span>expectations</span>
          </div>
          <div
            onClick={() => navigate("/construction")}
            className="hidden med:flex hover:bg-off-white/80 cursor-pointer bg-off-white flex-row mt-[6%] h-[7vw] w-[70%] rounded-[8px] text-[clamp(7px,1.6vw,25px)] text-black items-center justify-center "
          >
            <span>LEARN MORE</span>
            <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Specialties;
