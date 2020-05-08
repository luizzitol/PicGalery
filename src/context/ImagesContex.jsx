import React, { createContext, useReducer, useEffect, useState } from "react";
import FavsReducer from "../reducers/FavsReducer";

//Create context
export const ImagesContext = createContext();

const ImagesContextProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [showFavs, setShowFavs] = useState(false);

  const [images, setImages] = useState([]);

  // Reducer for Favorite pics fetching from Local Storage if available
  const [favs, dispatch] = useReducer(FavsReducer, [], () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  });

  // sync favs on local data
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  // if showFavs load favs into images state
  useEffect(() => {
    if (showFavs) {
      setIsLoading(true);
      setImages(favs);
      setIsLoading(false);
    }
  }, [showFavs, favs]);

  //if not on Favourtites tab fetch images from IPA by shearchTerm
  useEffect(() => {
    if (!showFavs) {
      setIsLoading(true);
      fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API}&q=${searchTerm}&per_page=200&safesearch=false`
      )
        .then((res) => res.json())
        .then((data) => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [searchTerm, showFavs]);

  return (
    <ImagesContext.Provider
      value={{
        images,
        isLoading,
        setIsLoading,
        setSearchTerm,
        setShowFavs,
        dispatch,
        favs,
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
