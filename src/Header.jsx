import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './index.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const isWide = width >= 1240;

  return (
    <div className="h-[100px] flex items-center bg-off-white px-[20px] relative">
      <Link to="/" className="h-full flex items-center">
        <div className="h-full">
          <img
            src="TransparentMcGeehan3.png"
            alt="logo"
            className="h-full max-w-full object-contain cursor-pointer transition-transform duration-200 hover:scale-[1.05]"
          />
        </div>
      </Link>

      <div className="flex items-center ml-auto space-x-[4vw]">
        {isWide && (
          <div className="flex space-x-[4vw] text-[20px] font-display font-extralight">
            <Link to="/commercial" className="cursor-pointer hover:text-dark-blue/70">Commercial</Link>
            <Link to="/residential" className="cursor-pointer hover:text-dark-blue/70">Residential</Link>
            <Link to="/construction" className="cursor-pointer hover:text-dark-blue/70">New Construction</Link>
            <Link to="/financial" className="cursor-pointer hover:text-dark-blue/70">Financing</Link>
          </div>
        )}

        <a
          href="tel:9892271612"
          className="block w-[160px] h-[60px] sm:w-[180px] sm:h-[65px]"
        >
          <button
            className="bg-dark-blue cursor-pointer flex flex-col justify-center items-center font-light text-white w-full h-full text-[14px] sm:text-[15px] hover:bg-dark-blue/85 transition-colors duration-300"
            type="button"
          >
            <span>CONTACT US NOW</span>
            <span>989-277-1612</span>
          </button>
        </a>

        {!isWide && (
          <button
            ref={buttonRef}
            className="bg-off-white cursor-pointer flex flex-col justify-center items-center font-light w-[36px] h-[36px] transition-transform duration-200 hover:scale-110 mr-[-8px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ transformOrigin: 'center center' }}
          >
            <div className="w-[60%] h-0.5 bg-black mb-1"></div>
            <div className="w-[60%] h-0.5 bg-black mb-1"></div>
            <div className="w-[60%] h-0.5 bg-black"></div>
          </button>
        )}
      </div>

      {menuOpen && !isWide && (
        <div
          ref={menuRef}
          className="absolute bg-off-white shadow-lg rounded-md p-4 flex flex-col space-y-3 font-display font-extralight text-[18px] z-50"
          style={{ minWidth: '180px', top: '100%', right: 0 }}
        >
          <Link to="/commercial" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>Commercial</Link>
          <Link to="/residential" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>Residential</Link>
          <Link to="/construction" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>New Construction</Link>
          <Link to="/financial" className="cursor-pointer hover:text-dark-blue/70" onClick={() => setMenuOpen(false)}>Financing</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
