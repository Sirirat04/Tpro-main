import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p className="text-sm mb-4">ติดตามเราได้ที่</p>
      <div className="flex justify-center space-x-4">
        <a href="https://facebook.com/yourpage" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/yourprofile" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/yourprofile" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm mt-4">&copy; 2024 โคตรปวดขี้.com.</p>
    </footer>
  );
};

export default Footer;
