import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiHtml5,
  SiVite,
  SiRedux,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiRedux />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiVite />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
