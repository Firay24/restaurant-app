/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Filter from 'components/Filter';
import Cards from 'components/Card';
import { getAllRestaurant } from 'utils/api';
import Loading from 'components/Loading';
import Button from 'components/Button';
import { AiOutlinePoweroff } from "react-icons/ai";

function Dashboard({ onLogoutHandler }) {
  const [restaurants, setRestaurants] = useState({ error: false, data: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    openNow: '',
    price: '',
    category: '',
  });
  const [originalOrder, setOriginalOrder] = useState([]);
  let filteredRestaurants = '';

  const getRestaurantHandler = async () => {
    try {
      const result = await getAllRestaurant();
      setRestaurants(result);
      setOriginalOrder(result.data);
      setIsLoading(false);
    } catch (error) {
      setRestaurants({ error: true, data: [] });
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter);
  };

  const sortPriceCheap = () => {
    const sortedData = restaurants.data
      .filter((restaurant) => restaurant.price)
      .sort((a, b) => {
        const [minA, minB] = [a.price, b.price].map((price) => parseInt(price.replace('$', '').split(' - ')[0], 10));
        return minA - minB;
      });
    setRestaurants((prevItems) => ({
      ...prevItems,
      data: sortedData,
    }));
  };

  const sortPriceExpensive = () => {
    const sortedData = restaurants.data
      .filter((restaurant) => restaurant.price)
      .sort((a, b) => {
        const [minA, minB] = [a.price, b.price].map((price) => parseInt(price.replace('$', '').split(' - ')[0], 10));
        return minB - minA;
      });
    setRestaurants((prevItems) => ({
      ...prevItems,
      data: sortedData,
    }));
  };

  const sorting = () => {
    if (filters.price === 'cheap') {
      sortPriceCheap();
    } else if (filters.price === 'expensive') {
      sortPriceExpensive();
    } else {
      setRestaurants((prevItems) => ({
        ...prevItems,
        data: originalOrder,
      }));
    }
  };

  useEffect(() => {
    getRestaurantHandler();
  }, []);

  useEffect(() => {
    sorting();
  }, [filters.price]);

  if (!isLoading) {
    filteredRestaurants = restaurants.data.filter((restaurant) => {
      if (filters.openNow !== '' && restaurant.open_now_text !== filters.openNow) {
        return false;
      }
      if (filters.category !== '' && restaurant.cuisine && restaurant.cuisine.length > 0 && restaurant.cuisine[0].name !== filters.category) {
        return false;
      }
      return true;
    });
  }

  return (
    <div>
      <div className="flex items-center">
        <div>
          <h1 className="text-4xl">
            Restaurant
          </h1>
          <p className="w-1/2 text-gray-700 mt-2">
            is simply dummy text of the printing and typesetting industry.Lorem
            Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown.
          </p>
        </div>
        <div>
          <Button onClick={onLogoutHandler} text={<AiOutlinePoweroff />} style="text-xl text-red-500 hover:text-red-700" />
        </div>
      </div>
      <div>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className="flex flex-wrap mt-5 gap-y-8 gap-x-7 justify-items-start">
        {
          isLoading ? (
            <Loading />
          ) : filteredRestaurants.length === 0 ? (
            <p>Tidak ditemukan</p>
          ) : (
            filteredRestaurants.map((restaurant) => {
              if (restaurant.price) {
                return <Cards key={restaurant.location_id} restaurant={restaurant} />;
              }
              return null;
            })
          )
        }
      </div>
    </div>
  );
}

export default Dashboard;
