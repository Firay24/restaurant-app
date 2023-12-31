/* eslint-disable import/prefer-default-export */
const BASE_URL_RESTAURANT = 'https://travel-advisor.p.rapidapi.com/restaurants';
const BASE_URL_LOGIN = 'https://register-and-login-with-jwt-token.p.rapidapi.com/user';

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken);
}

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL_LOGIN}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '98d32ea233msh2186d51799ab409p1e394cjsn4619ffde6001',
      'X-RapidAPI-Host': 'register-and-login-with-jwt-token.p.rapidapi.com',
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    return { error: true };
  }

  return { error: false, data: responseJson };
}

async function getAllRestaurant() {
  const response = await fetch(`${BASE_URL_RESTAURANT}/list?location_id=293913&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '98d32ea233msh2186d51799ab409p1e394cjsn4619ffde6001',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  });

  const responseJson = await response.json();

  if (!response.ok) {
    return { error: true };
  }

  return { error: false, data: responseJson.data };
}

async function getRestaurantById(id) {
  const response = await fetch(`${BASE_URL_RESTAURANT}/get-details?location_id=${id}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '98d32ea233msh2186d51799ab409p1e394cjsn4619ffde6001',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    },
  });

  const responseJson = await response.json();

  if (!response.ok) {
    return { error: true };
  }

  return { error: false, data: responseJson };
}

export {
  getAllRestaurant,
  getRestaurantById,
  getAccessToken,
  putAccessToken,
  login,
};
