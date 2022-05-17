import React, { useEffect, useState } from "react";
import { Albums, Navbar } from "./components";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const fetchAlbums = async () => {
    const dataFetch = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Albums albums={albums} />
    </div>
  );
};

export default App;
