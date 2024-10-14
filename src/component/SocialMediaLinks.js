import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
      <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
      <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
    </div>
  );
};

export default SocialMediaLinks;
