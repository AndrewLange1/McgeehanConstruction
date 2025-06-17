import React from "react";
import './index.css'

function Specialties() {
  return (
    <div className="font-display text-black text-center items-center mt-[2%] font-light flex flex-col">
      <div style={{ fontSize: "clamp(14px, 2.5vw, 40px)" }}>
        OUR SPECIALTIES
      </div>

      <div className="mt-[4%] text-white flex flex-col med:flex-row med:px-[2%] gap-[2%] items-center justify-between w-full">
        <button className="bg-dark-blue h-[35vw] med:h-[30vw] w-[95%] med:w-[30%] rounded-[10px] med:rounded-[2px] flex flex-col justify-start items-center pt-[1%] px-[2%]">
          <span className="text-[clamp(11px,2.5vw,23px)] med:text-[clamp(13px,1.5vw,30px)]">
            RESIDENTIAL
          </span>
          <div className="flex flex-col mt-[3%] gap-[0.5%] text-center text-[clamp(10px,2vw,20px)] med:hidden">
            <span>
              This is the text for the residential part of the website. I honestly don’t really know
            </span>
            <span>
              what to write, so I will ask David and whoever else for help. It does not
            </span>
            <span>
              need to be a really big text, but a couple sentences should get the job done. I
            </span>
            <span> 
              think that this is probably good. Then I’ll make a big button below!
            </span>
            <button className="hover:bg-off-white/80 cursor-pointer bg-off-white flex flex-row mt-[3%] mx-auto h-[10vw] w-[65%] rounded-[8px] text-[clamp(7px,2.3vw,25px)] text-black items-center justify-center">
                <span>CLICK HERE TO LEARN MORE</span>
                <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
            </button>
          </div>
          <div className="hidden med:flex flex-col mt-[6%] gap-[0.5%] text-center text-[clamp(7px,1.2vw,20px)]">
            <span>This is the text for the residential part</span>
            <span>of the website. I honestly don’t really know</span>
            <span>what to write, so I will ask David and</span>
            <span>whoever else for help. It does not need to</span>
            <span>be a really big text, but a couple</span>
            <span>sentences should get the job done. I think</span>
            <span>that this is probably good. Then</span>
            <span>I’ll make a big button below!</span>
          </div>
          <div className="hidden med:flex hover:bg-off-white/80 cursor-pointer bg-off-white flex-row mt-[8%] h-[7vw] w-[70%] rounded-[8px] text-[clamp(7px,1.6vw,25px)] text-black items-center justify-center ">
            <span className="">LEARN MORE</span>
            <img src="right-arrow.svg" className="h-[45%] ml-[5%]"/>
          </div>
        </button>
        <div className="block h-[5px] w-screen bg-white med:hidden" />
        <button className="bg-dark-blue h-[35vw] med:h-[30vw] w-[95%] med:w-[30%] rounded-[10px] med:rounded-[2px] flex flex-col items-center pt-[1%] px-[2%]">
          <span className="text-[clamp(11px,2.5vw,23px)] med:text-[clamp(13px,1.5vw,30px)]">
            COMMERCIAL
          </span>
          <div className="flex flex-col mt-[3%] gap-[0.5%] text-center text-[clamp(10px,2vw,20px)] med:hidden">
            <span>
              This is the text for the commercial part of the website. I honestly don’t really know
            </span>
            <span>
              what to write, so I will ask David and whoever else for help. It does not
            </span>
            <span>
              need to be a really big text, but a couple sentences should get the job done. I
            </span>
            <span> 
              think that this is probably good. Then I’ll make a big button below!
            </span>
            <button className="hover:bg-off-white/80 cursor-pointer bg-off-white flex flex-row mt-[3%] mx-auto h-[10vw] w-[65%] rounded-[8px] text-[clamp(7px,2.3vw,25px)] text-black items-center justify-center">
                <span>CLICK HERE TO LEARN MORE</span>
                <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
            </button>
          </div>
          <div className="hidden med:flex flex-col mt-[6%] gap-[0.5%] text-center text-[clamp(7px,1.2vw,20px)]">
            <span>This is the text for the commercial part</span>
            <span>of the website. I honestly don’t really know</span>
            <span>what to write, so I will ask David and</span>
            <span>whoever else for help. It does not need to</span>
            <span>be a really big text, but a couple</span>
            <span>sentences should get the job done. I think</span>
            <span>that this is probably good. Then</span>
            <span>I’ll make a big button below!</span>
          </div>
          <div className="hidden med:flex hover:bg-off-white/80 cursor-pointer bg-off-white flex-row mt-[8%] h-[7vw] w-[70%] rounded-[8px] text-[clamp(7px,1.6vw,25px)] text-black items-center justify-center ">
            <span className="">LEARN MORE</span>
            <img src="right-arrow.svg" className="h-[45%] ml-[5%]"/>
          </div>
        </button>
        <div className="block h-[5px] w-screen bg-white med:hidden" />
        <button className="bg-dark-blue h-[35vw] med:h-[30vw] w-[95%] med:w-[30%] rounded-[10px] med:rounded-[2px] flex flex-col items-center pt-[1%] px-[2%]">
          <span className="text-[clamp(11px,2.5vw,23px)] med:text-[clamp(13px,1.5vw,30px)]">
            NEW CONSTRUCTION
          </span>
          <div className="flex flex-col mt-[3%] gap-[0.5%] text-center text-[clamp(10px,2vw,20px)] med:hidden">
            <span>
              This is the text for the residential part of the website. I honestly don’t really know
            </span>
            <span>
              what to write, so I will ask David and whoever else for help. It does not
            </span>
            <span>
              need to be a really big text, but a couple sentences should get the job done. I
            </span>
            <span> 
              think that this is probably good. Then I’ll make a big button below!
            </span>
            <button className="hover:bg-off-white/80 cursor-pointer bg-off-white flex flex-row mt-[3%] mx-auto h-[10vw] w-[65%] rounded-[8px] text-[clamp(7px,2.3vw,25px)] text-black items-center justify-center">
                <span>CLICK HERE TO LEARN MORE</span>
                <img src="right-arrow.svg" className="h-[45%] ml-[5%]" />
            </button>
          </div>
          <div className="hidden med:flex flex-col mt-[8%] gap-[0.5%] text-center text-[clamp(7px,1.2vw,20px)]">
            <span>This is the text for the residential part</span>
            <span>of the website. I honestly don’t really know</span>
            <span>what to write, so I will ask David and</span>
            <span>whoever else for help. It does not need to</span>
            <span>be a really big text, but a couple</span>
            <span>sentences should get the job done. I think</span>
            <span>that this is probably good. Then</span>
            <span>I’ll make a big button below!</span>
          </div>
          <div className="hidden med:flex hover:bg-off-white/80 cursor-pointer bg-off-white flex-row mt-[6%] h-[7vw] w-[70%] rounded-[8px] text-[clamp(7px,1.6vw,25px)] text-black items-center justify-center ">
            <span className="">LEARN MORE</span>
            <img src="right-arrow.svg" className="h-[45%] ml-[5%]"/>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Specialties;
