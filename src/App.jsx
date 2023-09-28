/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'pages/Dasboard';

function App() {
  return (
    <div className="mx-10 my-10">
      <header>
        <h1 className="text-4xl">
          Restaurant
        </h1>
        <p className="w-1/2 text-gray-700 mt-2">
          is simply dummy text of the printing and typesetting industry.Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s,
          when an unknown.
        </p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
