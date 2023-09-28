import React, { useEffect, useState } from 'react';
import Filter from 'components/Filter';
import Cards from 'components/Card';
import { getAllRestaurant } from 'utils/api';

function Dashboard() {
  const [restaurants, setRestaurants] = useState({ error: false, data: [] });

  const getRestaurantHandler = async () => {
    try {
      const result = await getAllRestaurant();
      setRestaurants(result);
    } catch (error) {
      setRestaurants({ error: true, data: [] });
    }
  };

  useEffect(() => {
    getRestaurantHandler();
  }, []);

  console.log(restaurants);

  return (
    <div>
      <div>
        <Filter />
      </div>
      <div className="flex flex-wrap mt-5 gap-y-8 gap-x-7 justify-items-start">
        {
          restaurants
          && restaurants.data.map((restaurant) => {
            if (restaurant.price) {
              return <Cards key={restaurant.location_id} restaurant={restaurant} />;
            }
            return null;
          })
        }
      </div>
    </div>
  );
}

export default Dashboard;
