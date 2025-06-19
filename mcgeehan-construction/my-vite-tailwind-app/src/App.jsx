import React, { useState, useEffect } from "react";
import './index.css'
import Header from "./Header";
import Photos from "./Photos";
import Specialties from "./Specialties";
import Excellence from "./Excellence";

function App() {

  return (
    <>
    <div>
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
    </div>
    </>
  );
}

export default App;
