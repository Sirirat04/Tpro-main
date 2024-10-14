import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="p-6 bg-white shadow flex flex-col sm:flex-row items-center">
      <div className="flex items-center w-full max-w-5xl mx-auto">
        <img
          src="https://i.pinimg.com/originals/af/64/39/af64392e3610c6eb0197fbfd4fb86ded.jpg"
          alt="Logo"
          className="h-14"
        />
        <h1 className="text-3xl font-bold text-center mt-2 ml-4">
          โคตรปวดขี้.com
        </h1>
      </div>
      <nav className="w-full bg-white mt-4">
        <div className="container mx-auto flex items-center justify-center">
          <Link
            to="/"
            className="text-black hover:text-[#F7F1F0] hover:bg-[#006BBB] p-2 rounded-md transition duration-300  hover:border-transparent text-lg"
          >
            หน้าหลัก
          </Link>
          <span className="mx-2 text-lg">|</span>
          <Link
            to="/nearby"
            className="text-black hover:text-[#F7F1F0] hover:bg-[#006BBB] p-2 rounded-md transition duration-300  hover:border-transparent text-lg"
          >
            ใกล้ตัว
          </Link>
          <span className="mx-2 text-lg">|</span>
          <Link
            to="/reviews"
            className="text-black hover:text-[#F7F1F0] hover:bg-[#006BBB] p-2 rounded-md transition duration-300  hover:border-transparent text-lg"
          >
            รีวิว
          </Link>
          <span className="mx-2 text-lg">|</span>
          <Link
            to="/contact"
            className="text-black hover:text-[#F7F1F0] hover:bg-[#006BBB] p-2 rounded-md transition duration-300 hover:border-transparent text-lg"
          >
            ติดต่อเรา
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
