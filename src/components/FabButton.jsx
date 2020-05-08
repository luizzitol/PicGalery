import React, { useContext, useState, useEffect } from "react";
import { ImagesContext } from "../context/ImagesContex";

function FavButton({ image }) {
  const { dispatch, favs } = useContext(ImagesContext);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fav = favs.find((fav) => fav.id === image.id);
    if (fav) {
      setIsFav(true);
    }
  }, [favs]);

  function handleFav() {
    const type = isFav ? "REMOVE_FROM_FAVS" : "ADD_TO_FAVS";
    dispatch({
      type,
      image,
    });
    setIsFav(!isFav);
  }
  const icon = isFav ? "fas fa-heart" : "far fa-heart";
  const size = isFav ? "text-4xl" : "text-3xl";

  return (
    <i
      className={` ${icon} ${size} text-red-600 mr-4 cursor-pointer`}
      onClick={handleFav}
    ></i>
  );
}

export default FavButton;
