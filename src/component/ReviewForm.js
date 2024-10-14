import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const ReviewForm = ({ reviewsList, setReviewsList }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && rating) {
      const newReview = { review, rating };
      setReviewsList([...reviewsList, newReview]);
      setReview('');
      setRating(0);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">เพิ่มรีวิว</h3>
      <form onSubmit={handleReviewSubmit} className="mt-4">
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <FaStar
                key={star}
                className={`cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">{rating} ดาว</span>
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="เขียนรีวิว..."
          className="mt-2 w-full p-2 border rounded-lg"
          rows="4"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white rounded-lg px-4 py-2">ส่งรีวิว</button>
      </form>
    </div>
  );
};

export default ReviewForm;
