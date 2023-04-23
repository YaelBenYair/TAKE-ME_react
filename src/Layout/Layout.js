import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import SearchBusiness from '../SearchBusiness/SearchBusiness';

// /static/images/avatar/2.jpg
const settings = ['Profile', 'Logout'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




export default function Layout(props) {

    console.log(props.user)

    const currLocation = useLocation()
    console.log('Layout:', currLocation)

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        console.log(event.currentTarget)
        setAnchorElUser(event.currentTarget);
      };

    const handleCloseUserMenu = (setting) => {
        console.log(setting)
        if (setting === 'Logout') {
            localStorage.clear()
            window.open('/', '_self')
            setAuth(false)
            
        }
        setAnchorElUser(null);
    };

    const handleMenu = (event) => {
        setAuth(true)
        window.open('login/', '_self')
        setAnchorEl(event.currentTarget);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: '1', sm: 'block' } }}
          >
            TAKE ME
          </Typography>
          
          <SearchBusiness />

          {props.user ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
              <Typography textAlign="center" sx={{fontWeight: 'bold'}}>Hello {props.user.first_name.charAt(0).toUpperCase() + props.user.first_name.slice(1)}</Typography>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          )
          :
          (<div>
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

      <Outlet/>

    </Box>
  );
}