import React, { useState, useEffect } from "react";
import "./style.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { client } from "../../constans/client";

function Home() {
  const [photos, setPhotos] = useState([]);
  async function getPhotos() {
    try {
      const response = await client.get("/photos", { params: { _limit: 10 } });
      setPhotos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="wrapper">
      {photos.map((photo, index) => {
        return (
          <div key={index} className="postFrame">
            <div className="postUp">
              <img
                className="thumbnail"
                src={photo.thumbnailUrl}
                alt="thumbnail"
              />
              <h4>{photo.id}</h4>
            </div>
            <img src={photo.url} alt="content" />
            <div className="postDown">
              <div className="postDown_icons">
                <AiOutlineHeart className="icon" />
                <FaRegComment className="icon" />
                <FaRegBookmark className="icon" />
              </div>
              <div className="postDown_description">
                <h2>Kozminek_$:</h2>
                <p>{photo.title}</p>
              </div>
              <input
                type="text"
                placeholder="Dodaj komentarz"
                className="com"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
