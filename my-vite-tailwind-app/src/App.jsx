import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Header from "./Header";
import Photos from "./Photos";
import Specialties from "./Specialties";
import Excellence from "./Excellence";
import Founder from "./Founder.jsx";
import Footer from "./Footer.jsx";
import Commercial from "./Commercial.jsx";
import Residential from "./Residential.jsx";
import Construction from "./Construction.jsx";
import Financial from "./Financial.jsx";

function App() {
  return (
    <Router>
      <div className="font-display">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Photos />
                <Specialties />
                <div className="flex justify-center">
                  <div className="bg-black mt-[6%] h-[0.6px] w-[93%]" />
                </div>
                <Excellence />
                <div className="flex justify-center">
                  <div className="bg-black mt-[6%] h-[0.6px] w-[93%]" />
                </div>
                <Founder />
                <Footer />
              </>
            }
          />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential/>} />
          <Route path="/construction" element={<Construction/>} />
          <Route path="/financial" element={<Financial/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;