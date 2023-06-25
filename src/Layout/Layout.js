import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import SearchBusiness from "../SearchBusiness/SearchBusiness";
import { USER_ACTION, useUser, useUserDispatch } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "./Layout.css";
import { Login } from "@mui/icons-material";
import LoginPage from "../LoginPage/LoginPage";
import { grey } from "@mui/material/node/colors";
import LogoTakeMe from "../LogoTakeMe/LogoTakeMe";

// /static/images/avatar/2.jpg
const settings = ["Profile", "Logout"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const logDesi = {
  position: "relative",
  width: "100%",
  backgroundColor: grey[500],
  height: "100vh",
  opacity: "0.7",
  margin: "0",
};

export default function Layout() {
  const currLocation = useLocation();
  console.log("Layout:", currLocation);

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [popLogin, setPopLogin] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const user = useUser();
  const dispatch = useUserDispatch();
  console.log(user);
  console.log(user.popLogin);

  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    console.log(setting);
    if (setting === "Logout") {
      // window.open('/', '_self')
      // setAuth(false)
    }
    setAnchorElUser(null);
  };

  const handleMenu = (event) => {
    setPopLogin(true);
    dispatch({
      type: USER_ACTION.HANDLE_POP_LOGIN,
      popLogin: true,
    });
    // navigate('login/')
    setAnchorEl(event.currentTarget);
  };

  const handleLoginClose = () => {
    setPopLogin(false);
    dispatch({
      type: USER_ACTION.HANDLE_POP_LOGIN,
      popLogin: false,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#865C6A", height: "100vh" }}>
      <AppBar position="static" sx={{
        height: 'min-content'
      }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/*Hamburger menu*/}
          <LogoTakeMe />

          <SearchBusiness />

          {user.access ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user && user.profilePic ? (
                    <Avatar
                      alt="User profile picture"
                      src={user.profilePic ? user.profilePic : ""}
                    />
                  ) : user && user.firstName && user.lastName ? (
                    <Avatar>
                      {user.firstName.charAt(0).toUpperCase()}
                      {user.lastName.charAt(0).toUpperCase()}
                    </Avatar>
                  ) : (
                    <Avatar alt="User profile picture" />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                    Hello{" "}
                    {user.firstName.charAt(0).toUpperCase() +
                      user.firstName.slice(1)}
                  </Typography>
                </MenuItem>
                <MenuItem key="Profile" onClick={handleCloseUserMenu}>
                  <Link to="profile/">
                    <Typography textAlign="center">Profile</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key="challenges" onClick={handleCloseUserMenu}>
                  <Link to="challenges/">
                    <Typography textAlign="center">Challenges</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key="Logout">
                  <Typography textAlign="center">
                    <a href="" onClick={() => localStorage.clear()}>
                      Logout
                    </a>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <div>
              <Tooltip title="Log in">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {user.popLogin ? (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            backgroundColor: grey[500],
            height: "100vh",
            opacity: "0.7",
            margin: "0",
          }}
        >
          <Outlet />

          <Box
            sx={{
              position: "absolute",
              transform: "translate(50%)",
              right: "50%",
              // top: '-1rem',
              top: "-1rem",
            }}
          >
            <LoginPage onCloseLogin={handleLoginClose} />
          </Box>
        </Box>
      ) : (
        
        <Outlet />
        
      )}
    </Box>
  );
}
