/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from 'pages/Dasboard';
import DetailPage from 'pages/Detail';
import LoginPage from 'pages/Login';
import { putAccessToken, getAccessToken } from 'utils/api';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const navigate = useNavigate();

  const handleLoginsuccess = (user) => {
    setAuthedUser(user);
    navigate('/');
  };

  const getTokenFromLocalStrorage = () => {
    const token = getAccessToken();
    return token;
  };

  const onLogoutHandler = async () => {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
      setAuthedUser(null);
      putAccessToken('');
    }
  };

  useEffect(() => {
    const token = getTokenFromLocalStrorage();
    if (token) {
      setAuthedUser(token);
    }
  }, []);

  if (authedUser === null) {
    return (
      <div>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={handleLoginsuccess} />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="mx-10 my-10">
      <main>
        <Routes>
          <Route path="/" element={<Dashboard onLogoutHandler={onLogoutHandler} />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
