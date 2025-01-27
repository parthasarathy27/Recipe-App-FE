import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeInstruction from "./RecipeInstruction";
import Favourite from "./Favourite";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";

const Main = () => {
  const searchResults = useSelector((state) => state.searchResults); // Replace `searchResults` with your state key

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeInstruction/:id" element={<RecipeInstruction />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/SearchList" element={<SearchList recipes={searchResults} />} />
      </Routes>
    </>
  );
};

export default Main;
