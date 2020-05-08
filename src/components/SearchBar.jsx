import React, { useState, useContext } from "react";
import { ImagesContext } from "../context/ImagesContex";

function SearchBar() {
  const [text, setText] = useState("");
  const { setSearchTerm, setShowFavs } = useContext(ImagesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text);
    setShowFavs(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className=" mx-auto py-3 flex fixed top-0 w-full bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="border-b-2 border-teal-500 py-1 flex w-5/6 max-w-3xl mx-auto"
      >
        <input
          className=" text-gray-700 py-1 px-2 focus:outline-none text-xl w-full mr-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search image"
        />
        <input
          type="submit"
          value="Search"
          className="bg-teal-500 hover:bg-teal-700 border-none text-lg text-white py-2 px-2 rounded flex-shrink-0 ml-auto"
        />
      </form>
      <button
        onClick={() => setShowFavs(true)}
        className=" bg-orange-500 hover:bg-orange-600 border-none text-lg text-white px-2 py-2 rounded mx-3"
      >
        Show favs
      </button>
    </div>
  );
}

export default SearchBar;
