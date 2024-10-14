import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaShower,
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"; // เพิ่มการนำเข้าไอคอน
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { bathroomsData } from "./bathroomsData";
import Navbar from '././component/Navbar';
import AddBathroomPopup from "./component/AddBathroomPopup";
import Footer from './component/Footer';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBathrooms, setFilteredBathrooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddBathroom = (newBathroom) => {
    bathroomsData.push(newBathroom);
    handleSearch();
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredBathrooms([]);
      return;
    }

    const filtered = bathroomsData.filter(
      (bathroom) =>
        bathroom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bathroom.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bathroom.cleanliness.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBathrooms(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const totalItems =
    filteredBathrooms.length > 0
      ? filteredBathrooms.length
      : bathroomsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentItems =
    (searchTerm === "" ? bathroomsData : filteredBathrooms) || [];
  const displayItems = currentItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#012E3F" }}
    >
      <Navbar />
      <header className="p-6 bg-white flex flex-col items-center" style={{ backgroundColor: "#012E3F" }}>
        <div className="flex justify-center w-full max-w-xl mb-4">
          <input
            type="text"
            placeholder="ค้นหาห้องน้ำ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
          <button className="bg-[#006BBB] text-white p-2 rounded-lg ml-2">
            <FaSearch />
          </button>
        </div>
      </header>
      <div className="flex-grow flex justify-center items-center p-8">
        <div
          className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg"
          style={{ backgroundColor: "#F7F1F0" }}
        >
          <main>
            {displayItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayItems.map((bathroom) => (
                  <div
                    key={bathroom.id}
                    className="bg-gray-50 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl relative"
                  >
                    <img
                      src={bathroom.image}
                      alt={bathroom.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">
                      {bathroom.name}
                    </h2>
                    <p className="mt-2 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-gray-600" />
                      {bathroom.location}
                    </p>
                    <p className="mt-2 flex items-center">
                      <FaShower className="mr-2 text-gray-600" />
                      {bathroom.cleanliness}
                    </p>
                    <div className="mt-2 flex items-center">
                      <FaStar className="mr-2 text-yellow-500" />
                      {bathroom.rating}
                    </div>
                    <button
                      className="mt-4 py-2 px-4 rounded-lg"
                      style={{ backgroundColor: "#012E3F", color: "#FFF" }}
                    >
                      <Link to={`/bathroom/${bathroom.id}`}>ดูข้อมูล</Link>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">ไม่พบห้องน้ำที่ค้นหา</p>
            )}
          </main>

          {/* Pagination for Bathrooms */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {(currentPage - 1) * itemsPerPage + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(currentPage * itemsPerPage, totalItems)}
                  </span>{" "}
                  of <span className="font-medium">{totalItems}</span> results
                </p>
              </div>
              <div>
                <nav
                  aria-label="Pagination"
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                >
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    disabled={currentPage === 1}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        index + 1 === currentPage
                          ? "bg-indigo-600 text-white"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    disabled={currentPage === totalPages}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>

          <AddBathroomPopup
            isOpen={isPopupOpen}
            onClose={() => setPopupOpen(false)}
            onAdd={handleAddBathroom}
          />

          <button
            onClick={() => setPopupOpen(true)}
            className="fixed bottom-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
          >
            เพิ่มห้องน้ำ
          </button>
        </div>
      </div>

    <Footer />
    </div>
  );
}
