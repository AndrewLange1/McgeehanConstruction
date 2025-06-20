import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isWide = width >= 1240;

  let scale;
  if (width >= 800) {
    scale = 1;
  } else if (width <= 500) {
    scale = 0.7;
  } else {
    scale = 0.7 + ((width - 500) / 300) * 0.3;
  }

  return (
    <>
      <div className="h-[100px] flex items-center bg-off-white px-[50px] relative">
        <Link to="/">
        <div className="group">
          <img
            src="TransparentMcGeehan3.png"
            alt="logo"
            className="h-[100px] cursor-pointer transition-transform duration-200 group-hover:scale-[1.05]"
            style={{
              transform: `scale(${scale}) translateX(${-(1 - scale) * 220}px)`,
              transformOrigin: "left center",
            }}
          />
        </div>
        </Link>
        <div className="flex items-center ml-auto mr-[5px] space-x-[6vw]">
          {isWide && (
            <div className="flex space-x-[6vw] text-[20px] font-display font-extralight">
              <Link to="/commercial" className="cursor-pointer hover:text-dark-blue/70">Commercial</Link>
              <Link to="/residential" className="cursor-pointer hover:text-dark-blue/70">Residential</Link>
              <Link to="/construction" className="cursor-pointer hover:text-dark-blue/70">New Construction</Link>
              <Link to ="/financial" className="cursor-pointer hover:text-dark-blue/70">Financial</Link>
            </div>
          )}

          <a
            href="tel:9892271612"
            className={isWide ? "block w-[200px] h-[75px]" : "block w-[180px] h-[70px]"}
            style={{ transform: `scale(${scale})`, transformOrigin: "right center" }}
          >
            <button
              className={
                isWide
                  ? "bg-dark-blue cursor-pointer mr-[20px] flex flex-col justify-center items-center font-light text-white w-full h-full text-[16px] hover:bg-dark-blue/85 transition-colors duration-300"
                  : "bg-dark-blue cursor-pointer mr-[20px] flex flex-col justify-center items-center font-light text-white w-full h-full text-[15px] hover:bg-dark-blue/85 transition-colors duration-300"
              }
              type="button"
            >
              <span>CONTACT US NOW</span>
              <span>989-227-1612</span>
            </button>
          </a>

          {!isWide && (
            <button
              className="bg-off-white cursor-pointer flex flex-col justify-center items-center font-light text-white w-[36px] h-[36px] hover:bg-dark-blue/85 transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </button>
          )}
        </div>

        {menuOpen && !isWide && (
          <div
            className="absolute bg-off-white shadow-lg rounded-md p-4 flex flex-col space-y-3 font-display font-extralight text-[18px] z-50"
            style={{ minWidth: '180px', top: '100%', right: 0 }}
          >
           <Link to="/commercial" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>Commercial</Link>
           <Link to="/residential" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>Residential</Link>
           <Link to="/construction" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>New Construction</Link>
           <Link to="/financial" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>Financial</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
