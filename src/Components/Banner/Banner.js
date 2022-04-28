import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import axios from "../../Constants/axios";
import "./Banner.css";
import "../../Components/NavBar/NavBar.css";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
        console.log(response.data.results);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl + movie?.backdrop_path})`,
      }}
      className="banner"
    >
      <div className="content mt-5">
        <h1 className="title">{movie?.title || movie?.original_title}</h1>
        <h1 className="discription"> {movie?.overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
