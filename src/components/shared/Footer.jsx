import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import instagramImg from "../../assets/instagram.png";
import facebookImg from "../../assets/facebook.png";
import xImage from "../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="bg-[#244d3f]">
      <div className="container mx-auto text-white text-center p-10">
        <h1 className="text-xl font-bold mb-2">KeenKeeper</h1>
        <p className="text-xs mb-3">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p>Social Links</p>
        <div className="flex justify-center gap-2 mt-5 mb-5">
          <p>
            {/* <CiInstagram></CiInstagram> */}
            <img src={instagramImg} alt="" />
          </p>

          <p>
            <img src={facebookImg} />
          </p>
          <p>
            <img src={xImage} />
          </p>
        </div>
        <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />

        <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-3 md:gap-0 text-center md:text-left">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
