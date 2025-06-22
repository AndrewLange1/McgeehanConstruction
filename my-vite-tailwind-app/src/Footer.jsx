import React from "react";
import './index.css'

function Footer() {
    return(
        <div className="bg-dark-blue h-[92px] text-[16px] mt-[5%] flex flex-col text-white justify-center items-center">
            <span>WEBSITE CREATED BY ANDREW LANGE</span>
            <a href="ajlange.com" className="mt-[5px] hover:underline">ajlange.com</a>
        </div>
    )
}

export default Footer;