/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'pages/Dasboard';
import DetailPage from 'pages/Detail';

function App() {
  return (
    <div className="mx-10 my-10">
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
