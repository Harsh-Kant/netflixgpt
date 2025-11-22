import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="w-full h-full object-cover object-center absolute -z-10"
          src={BG_URL}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
