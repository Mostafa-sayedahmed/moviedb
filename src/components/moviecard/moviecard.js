import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./moviecard.css";

import {
  Avatar,
  CardActionArea,
  Chip,
  IconButton,
  Rating,
} from "@mui/material";
import { Box, color, flexbox, positions } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function Moviecard(props) {
  const poster = (posterpath) => {
    return `https://image.tmdb.org/t/p/w220_and_h330_face${props.movie.poster_path}`;
  };

  const openmovie = (movieid) => {};
  return (
    <>
      <Card
        sx={{
          width: 345,

          backgroundColor: "rgba(100,100,100, 0.7 )",
        }}
        key={props.movie.id}
        className="moviecard"
      >
        <NavLink to={"/Movie/" + props.movie.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={poster(props.movie.poster_path)}
              alt={props.movie.title}
              sx={{ height: "auto" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ minHeight: 20, color: "white" }}
              >
                {props.movie.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </NavLink>
        <Box className="card-buttons">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Chip
            color="warning"
            variant="outlined"
            avatar={<Avatar>{props.movie.vote_average}</Avatar>}
            label={
              <Rating
                name="half-rating-read"
                defaultValue={props.movie.vote_average / 2}
                precision={0.5}
                readOnly
              />
            }
          />
        </Box>
      </Card>
    </>
  );
}
