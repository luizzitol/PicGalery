import React from "react";
import _ from "lodash";
import FavButton from "./FabButton";

function ImageCardItem({ image, index, openFullScreen }) {
  // API send tags in this format "tag1, tag2, tag3".
  // 1. transform into array with split
  // 2. remove spaces with _.without
  // 3. join back into string with join and split by ","
  // expected result = [tag1, tag2, tag3]

  const formatedTags = _.without(image.tags.split(""), " ").join("").split(",");

  return (
    <div className="rounded-lg overflow-hidden shadow-xl bg-gray-300 m-4 border border-gray-400 hover:border-gray-800">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full object-cover cursor-pointer"
        style={{ height: "300px" }}
        onClick={() => openFullScreen(index)}
      />
      <div className="px-6 pt-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <FavButton image={image} />
        {formatedTags.map((tag, index) => (
          <span
            className="inline-block bg-gray-200 text-sm font-semibold text-gray-700 mr-2 rounded-full px-3 py-1"
            key={index}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ImageCardItem;
