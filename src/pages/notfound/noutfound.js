import React from "react";
import "./notfound.css";
import background from "../../assets/funny-404-error-page-design.gif";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

const Noutfound = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }
  function goBack() {
    navigate(-1); // go back one page
  }
  return (
    <div className="notfound">
      <Stack component="div" jusify-content="center">
        <Stack
          component="div"
          className="notfoundtitle"
          jusify-content="center"
        >
          <Typography variant="h1" color="initial" padding="10">
            404
          </Typography>
          <Typography variant="h4" color="initial">
            looks like u got lost.!!
          </Typography>
          <div>
            <Button
              onClick={goBack}
              variant="contained"
              endIcon={<ArrowBackIcon />}
              sx={{ margin: "5px" }}
            >
              Go back
            </Button>

            <Button
              sx={{ margin: "5px" }}
              onClick={goHome}
              variant="contained"
              endIcon={<HomeIcon />}
            >
              Go Home
            </Button>
          </div>
        </Stack>
        <img src={background} alt="page not found" />
      </Stack>
    </div>
  );
};

export default Noutfound;
