import React, { useState, useEffect } from "react";
import "./moviedetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Avatar, Chip, Rating } from "@mui/material";
import axiosinstance from "../../axiosConfig/axiosInstance";

const Moviedetails = () => {
  let params = useParams();
  const [movie, setmovie] = useState({});
  const poster = () => {
    return `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`;
  };
  useEffect(() => {
    // axios
    //   .get(
    //     ` https://api.themoviedb.org/3/movie/${params.id}?api_key=054f08f272d82bf546575736c21dcbca`
    //   )
    axiosinstance
      .get(`/${params.id}`)
      .then((response) => {
        setmovie(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="moviedetails">
      <Container
        fixed
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInlineStart: "0px",
        }}
        className="movies-container"
      >
        <div className="poster">
          <CardMedia
            component="img"
            height="140"
            image={poster()}
            alt={movie.title}
            sx={{ width: "300px", height: "auto" }}
          />
        </div>
        <div className="overview">
          <div className="Movietitle">
            <Typography variant="h3" color="inherit">
              {movie.title}
            </Typography>
            <Typography
              variant="h6"
              color="initial"
              style={{ color: "darkgray" }}
            >
              {movie.tagline}
            </Typography>
          </div>
          <div className="moviestatistic">
            <Typography
              variant="h6"
              color="initial"
              style={{ color: "darkgray" }}
            >
              Relase date :{movie.release_date}
            </Typography>
            <div>
              <Chip
                color="warning"
                variant="outlined"
                avatar={
                  <Avatar style={{ padding: "5px" }}>
                    {movie.vote_average}
                  </Avatar>
                }
                label={
                  <Rating
                    name="half-rating-read"
                    defaultValue={movie.vote_average / 2}
                    precision={0.5}
                    readOnly
                  />
                }
              />
            </div>
          </div>
          <Typography variant="h5" color="inherit">
            {movie.overview}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Moviedetails;
