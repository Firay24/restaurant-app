/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Button from 'components/Button';
import { AiOutlineStar, AiFillStar, AiTwotoneCheckCircle } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import DefaultImage from 'assets/default.png';
import { ImSpoonKnife } from 'react-icons/im';

function Cards({ restaurant }) {
  const rating = parseInt(restaurant.rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    // Untuk setiap bintang, kita cek apakah rating lebih besar atau sama dengan indeks saat ini
    const filled = i < rating;
    stars.push(
      <span key={i}>
        {filled ? (
          <AiFillStar />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  }

  return (
    <div className="flex flex-col w-[23%] drop-shadow-md bg-gray-100 p-4 h-[340px] justify-between">
      <div>
        <div className="bg-slate-300">
          {
            restaurant.photo ? (
              <img src={restaurant.photo.images.medium.url} alt={restaurant.caption} className="w-full rounded-md h-36" />
            ) : (
              <img src={DefaultImage} alt="default image" className="w-full rounded-md h-32" />
            )
          }
        </div>
        <div className="flex flex-col gap-y-1 mt-1">
          <div className="text-base">
            <p>{restaurant.name}</p>
          </div>
          <div className="flex">
            {stars}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-400 text-xs">
              <p>{restaurant.price}</p>
            </div>
            <div className="flex gap-x-1 items-center text-gray-400 text-xs">
              {
                restaurant.open_now_text === 'Closed Now' ? (
                  <div className="flex items-center gap-x-1">
                    <AiTwotoneCheckCircle className="text-red-500" />
                    <p>Closed</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-x-1">
                    <AiTwotoneCheckCircle className="text-green-500" />
                    <p>Open Now</p>
                  </div>
                )
              }
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-1 text-sm text-gray-500">
            <div className="flex items-center gap-x-1">
              <ImSpoonKnife className="text-xs" />
              <p>{restaurant.cuisine[0].name}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <FaLocationDot className="text-xs" />
              <p>{restaurant.ancestors[0].name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Button text="learn more" style="bg-blue-950 hover:bg-gray-950 rounded w-full text-white" />
      </div>
    </div>
  );
}

export default Cards;
