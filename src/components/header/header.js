import React from "react";
import "./header.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
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
            <Stack direction="row" spacing={2}>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>

              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                    : undefined
                }
                to="/About"
              >
                <Button color="inherit">About</Button>
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                    : undefined
                }
                to="/Movies"
              >
                <Button color="inherit">Movies</Button>
              </NavLink>

              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                    : undefined
                }
                to="/Favorites"
              >
                <Button color="inherit">Favorites</Button>
              </NavLink>

              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                    : undefined
                }
                to="/Login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>

              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "#3f51b5", borderRadius: "5px" }
                    : undefined
                }
                to="/Signup"
              >
                <Button color="inherit">Signup</Button>
              </NavLink>
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
