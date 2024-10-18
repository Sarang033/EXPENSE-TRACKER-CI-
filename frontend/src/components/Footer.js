import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex text-base justify-center light bg-gray-800 p-4">
      <div className="flex flex-col justify-evenly text-white text-l ">
        <div className="flex justify-center gap-2 mb-2">
          <a
            href="https://github.com/Sarang033"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="size-6" />
          </a>
          <a
            href="https://www.instagram.com/_sarangsharma_/"
            className=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="size-6" />
          </a>
        </div>
        © 2024 Sarang Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;