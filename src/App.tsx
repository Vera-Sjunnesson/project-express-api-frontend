import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllArtists } from './components/AllArtists';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllArtists />} />
      </Routes>
    </BrowserRouter>
  )
}