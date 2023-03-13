import React, { useEffect } from "react";
import "./header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TranslateIcon from "@mui/icons-material/Translate";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from "./../../store/action";

export default function Header() {
  const language = useSelector((state) => state.lang);
  const translate = useSelector((state) => state.translate);
  const dispatch = useDispatch();
  const tooglelang = () => {
    const translateEN = {
      lang: "EN",
      translate: {
        Home: "Home",
        Aboutus: "About us",
        Movies: "Movies",
        Favorites: "Favorites",
        Login: "Login",
        Signup: "Signup",
        Popularmovies: "Popular Movies",
      },
    };
    const translateAR = {
      lang: "ع",
      translate: {
        Home: "الرئيسية",
        Aboutus: "عن الموقع",
        Movies: "الافلام",
        Favorites: "المفضلة",
        Login: "تسجيل الدخول",
        Signup: "التسجيل",
        Popularmovies: "أفلام مشهورة",
      },
    };
    dispatch(changeLanguage(language == "EN" ? translateAR : translateEN));
  };
  return (
    <>
      <div className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              color="inherit"
              edge="start"
              aria-label="logo"
            >
              <LiveTvIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Movie DB
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  display: "flex",
                }}
              >
                <Link to="/">
                  <Button color="inherit">{translate.Home}</Button>
                </Link>

                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                      : undefined
                  }
                  to="/About"
                >
                  <Button color="inherit">{translate.Aboutus}</Button>
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                      : undefined
                  }
                  to="/Movies"
                >
                  <Button color="inherit">{translate.Movies}</Button>
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                      : undefined
                  }
                  to="/Favorites"
                >
                  <Button color="inherit">{translate.Favorites}</Button>
                </NavLink>
              </Stack>

              <stack direction="row" spacing={3}>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                      : undefined
                  }
                  to="/Login"
                >
                  <Button color="inherit">{translate.Login}</Button>
                </NavLink>

                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                      : undefined
                  }
                  to="/Signup"
                >
                  <Button color="inherit">{translate.Signup}</Button>
                </NavLink>

                <Button
                  color="inherit"
                  // sx={{ left: "95%" }}
                  onClick={() => tooglelang()}
                >
                  <LanguageIcon />

                  {language}
                </Button>
              </stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
