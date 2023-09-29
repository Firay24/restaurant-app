/* eslint-disable react/style-prop-object */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { login } from 'utils/api';
import Button from 'components/Button';

function Login({ loginSuccess }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  async function onLogin(user) {
    setIsLoading(true);
    try {
      const result = await login(user);

      if (result) {
        loginSuccess(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onLogin(user);
  };

  return (
    <div className="justify-center items-center w-full shadow rounded-lg bg-gray-100 px-6 flex flex-col m-auto h-screen">
      <div className="bg-white p-8 rounded-md drop-shadow-md">
        <div className="flex justify-center">
          <h2 className="text-2xl my-4 font-semibold">LOGIN</h2>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              placeholder="username"
              className="border mt-2 border-gray-200 rounded outline-none focus:ring-1 ring-blue-400 w-full px-4 py-3"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              placeholder="password"
              className="border mt-2 border-gray-200 rounded outline-none focus:ring-1 ring-blue-400 w-full px-4 py-3"
            />
          </div>
          <div className="mt-5">
            <Button text={isLoading ? 'Loading ...' : 'Login'} style="text-white bg-blue-600 w-full rounded hover:bg-blue-800" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
