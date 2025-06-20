import React, { useState, useEffect } from "react";
import './index.css'
import Header from "./Header";
import Photos from "./Photos";
import Specialties from "./Specialties";
import Excellence from "./Excellence";
import Founder from "./Founder.jsx";

function App() {

  return (
    <>
    <div className="font-display">
      <Header/>
      <Photos/>
      <Specialties/>
      <div className="flex justify-center">
        <div className="bg-black mt-[6%] h-[0.6px] w-[93%]"/>
      </div>
      <Excellence/>
      <div className="flex justify-center">
        <div className="bg-black mt-[6%] h-[0.6px] w-[93%]"/>
      </div>
      <Founder/>
    </div>
    </>
  );
}

export default App;
