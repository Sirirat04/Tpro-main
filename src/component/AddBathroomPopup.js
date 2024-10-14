import React, { useState } from "react";

const AddBathroomPopup = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [cleanliness, setCleanliness] = useState("");
  const [rating, setRating] = useState("");
  const [image, handleImageUpload] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBathroom = {
      id: Date.now(), // สร้าง ID ใหม่
      name,
      location,
      cleanliness,
      rating,
      image,
      mapLink,
      isPaid,
    };
    onAdd(newBathroom);
    onClose(); // ปิด Popup หลังจากเพิ่มรายการ
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">เพิ่มห้องน้ำใหม่</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ชื่อห้องน้ำ"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="สถานที่ (เช่น ตึก อาคาร ...)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
            required
            className="border p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="ลิงก์แผนที่ (เช่น Google Maps URL)"
            value={mapLink}
            onChange={(e) => setMapLink(e.target.value)}
            required
            className="border p-2 rounded mb-2 w-full"
          />
          <div className="mb-4">
            <label className="block mb-1">ประเภทห้องน้ำ:</label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value={false}
                checked={!isPaid}
                onChange={() => setIsPaid(false)} // ห้องน้ำฟรี
                className="mr-2"
              />
              ฟรี
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                value={true}
                checked={isPaid}
                onChange={() => setIsPaid(true)} // ห้องน้ำเสียเงิน
                className="mr-2"
              />
              เสียเงิน
            </label>
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              เพิ่ม
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white rounded px-4 py-2"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBathroomPopup;
