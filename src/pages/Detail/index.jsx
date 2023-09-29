/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRestaurantById } from 'utils/api';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { RiArrowLeftSLine, RiPriceTag3Fill, RiLinksFill } from 'react-icons/ri';
import { FaLocationDot } from 'react-icons/fa6';
import Loading from 'components/Loading';
import Review from './review';

function DetailPage() {
  const [restaurant, setRestaurant] = useState({ error: false, data: null });
  const { id } = useParams();
  const stars = [];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRestaurantHandler = async (id) => {
      try {
        const result = await getRestaurantById(id);
        if (result) {
          setRestaurant(result);
          setIsLoading(false);
        }
      } catch (error) {
        setRestaurant({ error: true, data: null });
      }
    };

    getRestaurantHandler(id);
  }, [id]);
  const { data } = restaurant;
  const dataRestaurant = data;

  if (restaurant.data && restaurant.data.rating) {
    const rating = parseInt(restaurant.data.rating);
    for (let i = 0; i < 5; i++) {
      // Untuk setiap bintang, kita cek apakah rating lebih besar atau sama dengan indeks saat ini
      const filled = i < rating;
      stars.push(
        <span key={i}>
          {filled ? (
            <AiFillStar className="text-yellow-400 text-2xl" />
          ) : (
            <AiOutlineStar className="text-yellow-400" />
          )}
        </span>
      );
    }
  }
  console.log(dataRestaurant);

  return (
    <div>
      <div>
        {
          isLoading ? (
            <Loading />
          ) : (
            <div>
              <div className="relative group w-full h-60 overflow-hidden">
                <img
                  src={dataRestaurant && dataRestaurant.photo.images.large.url}
                  alt="Deskripsi Gambar"
                  className="w-full h-full rounded object-cover transition-opacity hover:opacity-100 filter brightness-50 hover:brightness-100"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-slate-800 bg-opacity-10">
                  <div className="text-5xl text-white hover:text-blue-300">
                    <Link to="/">
                      <RiArrowLeftSLine />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-y-3 items-center">
                    {dataRestaurant && (
                    <h3 className="text-5xl text-white">
                      {dataRestaurant && dataRestaurant.name}
                    </h3>
                    )}
                    <div className="flex gap-x-1 items-center">
                      {stars}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-5 gap-x-3">
                <div className="grid col-span-2">
                  <h4 className="text-xl font-semibold mb-2">
                    Deskripsi
                  </h4>
                  <p>{dataRestaurant && dataRestaurant.description}</p>
                </div>
                <div className="bg-gray-100 p-3">
                  <p className="text-base font-semibold text-gray-800 mb-2">
                    Information
                  </p>
                  <div className="flex items-center gap-x-1">
                    <FaLocationDot className="text-xs" />
                    <p>{dataRestaurant && dataRestaurant.ancestors[0].name}</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <RiPriceTag3Fill className="text-xs" />
                    <p>{dataRestaurant && dataRestaurant.price}</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <RiLinksFill className="text-xs" />
                    <a href={dataRestaurant && dataRestaurant.web_url} className="text-blue-600 hover:text-blue-800">
                      Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-14 flex flex-col gap-y-4">
                <h4 className="text-xl font-semibold mb-2">
                  Review
                </h4>
                {
                dataRestaurant && dataRestaurant.reviews.map((item) => (
                  <Review item={item} />
                ))
              }
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default DetailPage;
