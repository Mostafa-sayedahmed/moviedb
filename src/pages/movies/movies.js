import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movies.css";
import Moviecard from "../../components/moviecard/moviecard";
import Media from "../../components/spinner/spinner";
import Typography from "@mui/material/Typography";
import {
  IconButton,
  Box,
  Pagination,
  TextField,
  ImageList,
  ImageListItem,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import Container from "@mui/material/Container";

import axiosinstance from "../../axiosConfig/axiosInstance";
import { useSelector } from "react-redux";
const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    axiosinstance
      .get(`/popular?page=${page}`)
      .then((response) => {
        setmovies(response.data.results);
        console.log(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  const logmovies = () => {
    console.log(movies);
    console.log(movies[0].title);
  };
  const searchmovie = (e) => {
    // console.log(e.target.value);
    if (e.target.value == null || e.target.value == "") {
      axiosinstance
        .get(`/popular?page=${page}`)
        .then((response) => {
          setmovies(response.data.results);
          console.log(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=054f08f272d82bf546575736c21dcbca&query=${e.target.value}}`
        )
        .then((response) => {
          setmovies(response.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  const translate = useSelector((state) => state.translate);
  const loader = useSelector((state) => state.loader);
  return (
    <div className="movies">
      <Container
        fixed
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="movies-container"
      >
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{ margin: "30px" }}
        >
          {translate.Popularmovies}
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            aria-label="refresh"
            onClick={logmovies}
          ></IconButton>
        </Typography>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="lg"
          margin="dense"
          color="primary"
          onChange={(e) => searchmovie(e)}
          sx={{
            width: "30rem",
            backgroundColor: "rgba(250,250,250,.7)",
            borderRadius: "5px",
            marginBottom: "40px",
          }}
        />

        {/*  */}
        {/* <ImageList sx={{ height: 650 }} cols={3} variant="woven" gap={8}>
          {movies.map((movie, i) => (
            <ImageListItem key={movie.id}>
              <Moviecard movie={movie}></Moviecard>
            </ImageListItem>
          ))}
        </ImageList> */}

        {/*  */}

        {loader ? (
          <Media></Media>
        ) : (
          <Box className="movieslist">
            {movies.map((movie, i) => (
              <Moviecard key={movie.id} movie={movie}></Moviecard>
            ))}
          </Box>
        )}
        <Pagination
          size="large"
          count={500}
          color="primary"
          page={page}
          onChange={handleChange}
          sx={{
            margin: "16px",
            backgroundColor: "rgb(200,200,250,0.5)",
            padding: "8px",
            borderRadius: "15px",
          }}
        />
      </Container>
    </div>
  );
};

export default Movies;
