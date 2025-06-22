import React from "react";
import './index.css'

function Excellence() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[5%] text-[clamp(20px,3vw,35px)] font-light">
        Excellence – It's what we do
        <div className="med:flex flex-col items-center mt-[5%] text-[clamp(18px,2vw,23px)] font-extralight hidden px-4 text-center leading-relaxed">
          <span>Here at McGeehan Construction we pride ourselves in the relationships we build with our customers.</span>
          <span>Whether you are looking for a small backyard project or a large commercial renovation, we will</span>
          <span>work with you to make sure your plans go to action asap. With a close knit local team, you can expect</span>
          <span>fast – and easy – communication. Our services include residential, commercial, and other</span>
          <span>miscellaneous projects. If you have an idea, we’ll work with you to help get it done! Working with</span>
          <span>professionals has never been easier. Be sure to call us today for a free consultation.</span>
          <span>We’re looking forward to working with you!</span>
        </div>
        <div className="med:hidden flex flex-col items-center mt-[4%] text-[clamp(17px,2.8vw,20px)] font-extralight px-[10%] text-center leading-relaxed w-full max-w-[1000px]">
        <span>Here at McGeehan Construction we pride</span>
        <span>ourselvesourselves in the relationships we build</span>
        <span>with our customers. Whether you are looking</span>
        <span>for a small backyard project or a large commercial</span>
        <span>renovation, we will work with you. To make sure</span>
        <span>your plans go to action asap. With a close-knit</span>
        <span>local team you can expect fast - and easy - </span>
        <span>communication. Our services include residential,</span>
        <span>commercial, and other miscellaneous projects. If</span>
        <span>you have an idea, we’ll work with you to help get</span>
        <span>it done! Working with pros has never been easier.</span>
        <span>Call us today for a free consultation —</span>
        <span>we’re excited to help!</span>
        </div>
        <a
          href="mailto:mcgeehanconstruction@gmail.com"
          className="flex hover:bg-dark-blue/80 cursor-pointer bg-dark-blue mt-[8%] h-[15vw] med:h-[11vw] w-[66%] med:w-[40%] rounded-[8px] med:text-[clamp(18px,2vw,23px)] text-[clamp(15px,2.8vw,20px)] flex-col justify-center text-white items-center text-center"
        >
          <span>HAVE ANY QUESTIONS?</span>
          <span className="mt-[1%] med:mt-[3%]">mcgeehanconstruction@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default Excellence;
