import React, { useState, useEffect } from "react";

import "./style.css";
import { client } from "../../constans/client";

const Explore = () => {
  const [photos, setPhotos] = useState([]);
  async function getPhotos() {
    try {
      const response = await client.get("/photos", { params: { _limit: 100 } });
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
          return (
            <img key={photo.id} className="photo" src={photo.url} alt="" />
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
