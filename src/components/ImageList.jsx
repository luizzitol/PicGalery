import React, { useState, useContext } from "react";
import ImageCardItem from "./ImageCardItem";
import { ImagesContext } from "../context/ImagesContex";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import spinner from "./spinner.svg";

function ImageList() {
  const { isLoading, images } = useContext(ImagesContext);

  const largePicsArray = images.map((image) => image.largeImageURL);

  const [openPicture, setOpenPicture] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  function openFullScreen(index) {
    setOpenPicture(index);
    setIsFullScreen(true);
  }

  return (
    <>
      {isLoading ? (
        <div className="text-6xl text-center mt-48">
          <img src={spinner} alt="Loading" className="block mx-auto" />
        </div>
      ) : !images.length ? (
        <div className="text-6xl text-center mt-48">No images found</div>
      ) : (
        <div className=" mt-20">
          <div className="grid grid-cols-1 max-w-screen-sm md:max-w-screen-lg md:grid-cols-2 xl:max-w-full xl:m-4 xl:grid-cols-3 mx-6 mx-auto">
            {images.map((image, index) => {
              return (
                <ImageCardItem
                  key={image.id}
                  image={image}
                  index={index}
                  openFullScreen={openFullScreen}
                />
              );
            })}
            {isFullScreen && (
              <Lightbox
                mainSrc={largePicsArray[openPicture]}
                nextSrc={
                  largePicsArray[(openPicture + 1) % largePicsArray.length]
                }
                prevSrc={
                  largePicsArray[
                    (openPicture + largePicsArray.length - 1) %
                      largePicsArray.length
                  ]
                }
                onCloseRequest={() => setIsFullScreen(false)}
                onMovePrevRequest={() =>
                  setOpenPicture(
                    (openPicture + largePicsArray.length - 1) %
                      largePicsArray.length
                  )
                }
                onMoveNextRequest={() =>
                  setOpenPicture((openPicture + 1) % largePicsArray.length)
                }
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default ImageList;
