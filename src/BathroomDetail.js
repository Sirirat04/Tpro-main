import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bathroomsData } from './bathroomsData';
import Navbar from './component/Navbar';
import MapSection from './component/MapSection';
import ReviewForm from './component/ReviewForm';
import ReviewList from './component/ReviewList';
import SocialMediaLinks from './component/SocialMediaLinks';
import Footer from './component/Footer';

const BathroomDetail = () => {
  const { id } = useParams();
  const bathroom = bathroomsData.find(b => b.id === parseInt(id));
  const [reviewsList, setReviewsList] = useState([]);

  if (!bathroom) {
    return <p>ไม่พบห้องน้ำที่คุณต้องการดู</p>;
  }

  const center = {
    lat: bathroom.latitude,
    lng: bathroom.longitude,
  }

  const markers = bathroomsData.map(b => ({
    latitude: b.latitude,
    longitude: b.longitude,
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center p-8">
        <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{bathroom.name}</h2>
          <img src={bathroom.image} alt={bathroom.name} className="w-full h-60 object-cover rounded-lg my-4" />
          <p><strong>สถานที่:</strong> {bathroom.location}</p>
          <p><strong>ความสะอาด:</strong> {bathroom.cleanliness}</p>
          <p><strong>คะแนน:</strong> {bathroom.rating}</p>
          <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg">กลับไปยังรายการห้องน้ำ</Link>

          <MapSection center={center} markers={markers} />

          <ReviewForm reviewsList={reviewsList} setReviewsList={setReviewsList} />

          <ReviewList reviewsList={reviewsList} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BathroomDetail;
