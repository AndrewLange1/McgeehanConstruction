import React, { useState, useRef, useEffect } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Specialties() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState([false, false, false]);
  const [overflowing, setOverflowing] = useState([false, false, false]);

  const paragraphRefsMobile = useRef([]);
  const paragraphRefsDesktop = useRef([]);

  const specialties = [
    {
      title: "RESIDENTIAL",
      route: "/residential",
      paragraph: `From custom home builds to remodels, we deliver tailored solutions that turn your vision into reality. Our team ensures every detail reflects your unique style, with craftsmanship that stands the test of time and comfort that feels like home. We work closely with you every step of the way — from planning to move-in day.`
    },
    {
      title: "COMMERCIAL",
      route: "/commercial",
      paragraph: `We specialize in commercial spaces that balance functionality with aesthetic impact. Whether it's an office, retail space, or hospitality venue, we build with precision and efficiency to meet your deadlines, budgets, and business goals. Partner with us for reliable, scalable, and professional construction results.`
    },
    {
      title: "NEW CONSTRUCTION",
      route: "/construction",
      paragraph: `Our new construction services focus on ground-up development tailored to your goals. From permits and foundations to finishing touches, we manage every aspect of the build with precision. Expect transparent communication, budget clarity, and a final product that exceeds expectations.`
    }
  ];

  useEffect(() => {
    function checkOverflow() {
      const isMobile = window.innerWidth < 768;
      const refs = isMobile ? paragraphRefsMobile.current : paragraphRefsDesktop.current;

      const result = refs.map(ref => {
        if (!ref) return false;
        return ref.scrollHeight > ref.clientHeight + 1;
      });
      setOverflowing(result);
    }

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const toggleExpand = (index) => {
    setExpanded(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="font-display text-black text-center items-center mt-[2%] font-light flex flex-col">
      <div className="text-[clamp(20px,3.5vw,40px)] mb-6">OUR SPECIALTIES</div>

      <div className="mt-[4%] text-white flex flex-col items-center gap-6 med:flex-row med:px-[2%] med:gap-[2%] w-full justify-center">
        {specialties.map(({ title, route, paragraph }, index) => (
          <button
            key={index}
            className="flex-1 bg-dark-blue w-[95%] med:w-auto rounded-[10px] med:rounded-[4px] flex flex-col items-center px-4 pt-6 pb-8"
          >
            <span className="text-[clamp(19px,3vw,40px)] med:text-[clamp(22px,2.3vw,32px)] font-light mb-4">
              {title}
            </span>

            {/* MOBILE */}
            <div className="flex flex-col text-center text-[clamp(16px,3vw,20px)] med:hidden mt-4 px-4 w-[90%] mx-auto select-none">
              <p
                ref={el => paragraphRefsMobile.current[index] = el}
                className={`leading-relaxed transition-all duration-300
                  ${expanded[index] ? 'line-clamp-none' : 'line-clamp-5'}
                  min-h-[6.5rem] mb-2`}
              >
                {paragraph}
              </p>

              {(overflowing[index] || expanded[index]) && (
                <div
                  className="text-white text-2xl cursor-pointer select-none mx-auto mb-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                >
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              )}

              <button
                onClick={() => navigate(route)}
                className="hover:bg-off-white/80 cursor-pointer bg-off-white mx-auto h-[11vw] max-h-[60px] w-[80%] rounded-md text-[clamp(13px,3vw,22px)] text-black flex items-center justify-center"
              >
                <span>CLICK HERE TO LEARN MORE</span>
                <img src="right-arrow.svg" className="h-[45%] ml-2" />
              </button>
            </div>

            {/* DESKTOP */}
            <div className="hidden med:flex flex-col items-center w-[90%] mt-4 px-4 select-none">
              <p
                ref={el => paragraphRefsDesktop.current[index] = el}
                className={`text-center text-[clamp(15px,1.2vw,22px)] leading-relaxed transition-all duration-300
                  ${expanded[index] ? 'line-clamp-none' : 'line-clamp-8'}
                  min-h-[12.5rem] mb-2`}
              >
                {paragraph}
              </p>

              {(overflowing[index] || expanded[index]) && (
                <div
                  className="text-white text-2xl cursor-pointer select-none mx-auto mb-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                >
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              )}

              <div
                onClick={() => navigate(route)}
                className="hover:bg-off-white/80 cursor-pointer bg-off-white mt-2 h-[55px] w-[70%] rounded-md text-[clamp(14px,1.5vw,20px)] text-black flex items-center justify-center"
              >
                <span>LEARN MORE</span>
                <img src="right-arrow.svg" className="h-[45%] ml-2" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Specialties;