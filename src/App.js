import React from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import ImagesContextProvider from "./context/ImagesContex";

function App() {
  return (
    <ImagesContextProvider>
      <SearchBar />
      <ImageList />
    </ImagesContextProvider>
  );
}

export default App;
