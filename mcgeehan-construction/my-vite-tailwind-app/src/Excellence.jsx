import React, { useState, useEffect } from "react";
import './index.css'

function Excellence() {
    return(
        <div>
            <div className="flex flex-col items-center justify-center mt-[5%] text-[clamp(14px,2.5vw,40px)] font-light">
                Excellence - It's what we do
                <div className="flex flex-col items-center mt-[5%] text-[clamp(9px,1.7vw,25px)] font-extralight">
                    <span>Here at McGeehan Construction we pride ourselves in the relationships we build with our customers.</span>
                    <span>Whether you are looking for a small backyard project or a large commercial renovation, we will</span>
                    <span>work with you to make sure your plans go to action asap. With a close knit local team, you can expect</span>
                    <span>fast - and easy - communication. Our services include residential, commercial, and other</span>
                    <span>miscellaneous projects. If you have an idea, we’ll work with you to help get it done! Working with</span>
                    <span>Professionals has never been easier. Be sure to call us today for a free consultation.</span>
                    <span>We’re looking forward to working with you!</span>
                </div>
                <a href="mailto:mcgeehanconstruction@gmail.com"
                   className="flex hover:bg-dark-blue/80 cursor-pointer bg-dark-blue mt-[8%] h-[12vw] w-[50%] rounded-[8px] text-[clamp(9px,1.6vw,25px)] flex-col justify-center text-white items-center text-center">
                    <span>HAVE ANY QUESTIONS?</span>
                    <span className="mt-[3%]">mcgeehanconstruction@gmail.com</span>
                </a>
            </div>
        </div>
    )
}

export default Excellence;