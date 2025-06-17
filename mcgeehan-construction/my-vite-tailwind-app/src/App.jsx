import React, { useState, useEffect } from "react";
import './index.css'
import Header from "./Header";
import Photos from "./Photos";
import Specialties from "./Specialties";

function App() {

  return (
    <>
    <div>
      <Header/>
      <Photos/>
      <Specialties/>
    </div>
    </>
  );
}

export default App;
