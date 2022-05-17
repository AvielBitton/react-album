import React, { useEffect, useState } from "react";
import { Albums, Navbar } from "./components";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [photos,setPhotos] = useState([]);


  const fetchAlbums = async () => {
    const dataAlbumFetch = await fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  };

  const fetchPhotos = async () => {
    const dataPhotosFetch = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  };

  useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Albums albums={albums} />
    </div>
  );
};

export default App;
