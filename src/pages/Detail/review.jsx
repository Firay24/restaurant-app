/* eslint-disable comma-dangle */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import ProfileImage from 'assets/profile.jpg';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Review({ item }) {
  const stars = [];
  if (item && item.rating) {
    const rating = parseInt(item.rating);
    for (let i = 0; i < 5; i++) {
      const filled = i < rating;
      stars.push(
        <span key={i}>
          {filled ? (
            <AiFillStar className="text-yellow-400" />
          ) : (
            <AiOutlineStar className="text-yellow-400" />
          )}
        </span>
      );
    }
  }
  return (
    <div className="grid grid-cols-6 drop-shadow border p-5">
      <div className="flex flex-col text-xs gap-y-2">
        <img src={ProfileImage} alt="profile" className="w-10 h-10 rounded-full" />
        <p>{item.author}</p>
      </div>
      <div className="grid col-span-5 text-xs">
        <h3 className="text-base font-medium">{item.title}</h3>
        <div className="flex">
          {stars}
        </div>
        <div className="mt-3">
          <p>{item.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
