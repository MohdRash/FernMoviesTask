import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import "./RowPost.css";
import YouTube from "react-youtube";
import { Col, Card, CardBody, CardImg } from "reactstrap";

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
      console.log(response.data.results);
    });
  });

  const opts = {
    // height: "490",
    // width: "1400",
    justifyContent: "center",
    margin: "auto",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieTrailr = (id) => {
    if (urlId) {
      setUrlId("");
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        )
        .then((response) => {
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          }
        });
    }
  };
  return (
    <div className="row">
      <h1 className="text-danger font-weight-bold movieHead ml-4 p-3">
        {props.title}
      </h1>
      <div
        className="posters d-flex flex-wrap"
        style={{ justifyContent: "space-between", flexDirection: "row" }}
      >
        {movie?.map((obj) => (
          <Col>
            <Card
              className="card"
              style={{
                width: "12rem",
                height: "18rem",
                margin: "10px",
              }}
              key={obj.id}
              onClick={() => handleMovieTrailr(obj.id)}
            >
              <CardImg
                top
                className="img-fluid card-img-top"
                style={{ height: "12rem " }}
                src={`${imageUrl + obj.backdrop_path}`}
                alt={obj.name}
              />
              <CardBody
                className="card-body text-center"
                style={{ color: "black" }}
              >
                <h2
                  className="mt-0 card-title"
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    // padding: "4px",
                  }}
                >
                  {obj.original_title || obj.original_name}
                </h2>
                <h6 className="card-text">
                  {obj.first_air_date || obj.release_date}
                </h6>
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
