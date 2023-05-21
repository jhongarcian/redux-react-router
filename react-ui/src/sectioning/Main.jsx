import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing, Favorites, Breeds, Quiz } from '../views';



const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </main>
  );
};
export default Main;
