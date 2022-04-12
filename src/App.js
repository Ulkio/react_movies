import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getTrendingMovies } from "./api/axios";
import React, { useState, useEffect } from "react";
import Header from "./containers/Header";
import CardsList from "./containers/CardsList";
import Search from "./containers/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/trending" element={<CardsList />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
