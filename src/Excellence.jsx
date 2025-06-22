import React from "react";
import './index.css'

function Excellence() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[5%] text-[clamp(23px,3.5vw,35px)] font-light">
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
        <div className="med:hidden flex flex-col items-center mt-[4%] text-[clamp(18px,2.8vw,20px)] font-extralight px-[10%] text-center leading-relaxed w-full max-w-[1000px]">
        <div className="tiny:flex med:hidden flex-col items-center mt-[4%] text-[clamp(13px,4vw,18px)] font-extralight px-[6%] text-center leading-snug w-full max-w-[1000px] hidden">
  <span>Here at McGeehan Construction</span>
  <span>we pride ourselves</span>
  <span>in the relationships we build</span>
  <span>with our customers.</span>

  <span>Whether you are looking for</span>
  <span>a small backyard project</span>
  <span>or a large commercial renovation,</span>
  <span>we will work with you</span>

  <span>to make sure your plans</span>
  <span>go to action asap.</span>
  <span>With a close knit local team,</span>
  <span>you can expect fast –</span>
  <span>and easy – communication.</span>

  <span>Our services include residential,</span>
  <span>commercial, and other miscellaneous projects.</span>

  <span>If you have an idea,</span>
  <span>we’ll work with you</span>
  <span>to help get it done!</span>

  <span>Working with professionals</span>
  <span>has never been easier.</span>
  <span>Be sure to call us today</span>
  <span>for a free consultation.</span>
  <span>We’re looking forward</span>
  <span>to working with you!</span>
</div>


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
