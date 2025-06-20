import React from "react";
import './index.css'

function Excellence() {
  return (
    <div className="w-full flex justify-center mt-[5%]">
      <div className="text-[clamp(14px,2.5vw,40px)] font-light flex flex-col items-center">
        <span>MEET THE FOUNDER</span>
        <img src="/profile.jpg" className="aspect-square w-[12vw] rounded-full mt-[5%]" />
        <div className="flex flex-col items-center mt-[5%] text-[clamp(9px,1.7vw,25px)] font-extralight">
            <span>At 19 years old, David McGeehan - born and raised in Owosso Michigan - decided to take a risk and </span>
            <span>start his own construction company. At first David learned invaluable customer service skills,</span>
            <span>creating important relationships. Starting out of his own garage also gained him experience in miscellaneous</span>
            <span>projects. Over time he was able to hire his own crew, and scale projects up to a commercial scale. </span>
            <span>Outside of work you can find David playing golf with his friends or doing another hobby he likes. David would</span>
            <span>love to meet you! You can reach him at 989-227-1612, or email with any questions at </span>
            <span>mcgeehanconstruction@gmail.com.</span>
        </div>
      </div>
    </div>
  );
}

export default Excellence;
