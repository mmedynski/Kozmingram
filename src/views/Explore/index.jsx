import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Explore = () => {
  const [photos, setPhotos] = useState([]);
  async function getPhotos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        { params: { _limit: 100 } }
      );
      setPhotos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div className="explore__wrapper">
      <div className="grid">
        {photos.map((photo) => {
          return <img className="photo" src={photo.url} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Explore;
