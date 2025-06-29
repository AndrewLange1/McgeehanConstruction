import React from "react";
import './index.css';

function Excellence() {
  return (
    <div className="w-full flex justify-center mt-[5%]">
      <div className="text-[clamp(20px,3vw,35px)] font-light flex flex-col items-center w-full px-4">
        <span>MEET THE FOUNDER</span>
        <img src="/profile.jpg" className="aspect-square w-[23vw] med:w-[13vw] rounded-full mt-[5%]" />
        <div className="hidden med:flex flex-col items-center mt-[5%] text-[clamp(18px,2vw,23px)] font-extralight px-6 text-center leading-relaxed max-w-[1000px]">
          <span>At 19 years old, David McGeehan - born and raised in Owosso Michigan - decided to take</span>
          <span>a risk and start his own construction company. At first David learned invaluable</span>
          <span>customer service skills, creating important relationships. Starting out of his</span>
          <span>own garage also gained him experience in miscellaneous projects. Over time he</span>
          <span>was able to hire his own crew, and scale projects up to a commercial scale.</span>
          <span>Outside of work you can find David playing golf with his friends or doing</span>
          <span>another hobby he likes. David would love to meet you! You can reach him</span>
          <span>at 989-227-1612, or email with any questions at</span>
          <span>mcgeehanconstruction@gmail.com.</span>
        </div>
        <div className="med:hidden block mt-[5%] text-[clamp(18px,3vw,20px)] font-extralight px-[8%] text-center leading-relaxed max-w-[1000px]">
          <p>
            At 19 years old, David McGeehan – born and raised in Owosso Michigan – decided to take a risk and start his own construction company. At first David learned invaluable customer service skills, creating important relationships. Starting out of his own garage also gained him experience in miscellaneous projects. Over time he was able to hire his own crew, and scale projects up to a commercial scale. Outside of work you can find David playing golf with his friends or doing another hobby he likes. David would love to meet you! You can reach him at 989-227-1612, or email with any questions at mcgeehanconstruction@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Excellence;
