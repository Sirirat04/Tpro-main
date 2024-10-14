import React from 'react';

const ReviewList = ({ reviewsList }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold">รีวิวที่ส่งแล้ว:</h4>
      {reviewsList.length === 0 ? (
        <p>ยังไม่มีรีวิว</p>
      ) : (
        <ul className="list-disc list-inside">
          {reviewsList.map((item, index) => (
            <li key={index} className="mt-2">
              <span className="font-bold">{item.rating} ดาว:</span> {item.review}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
