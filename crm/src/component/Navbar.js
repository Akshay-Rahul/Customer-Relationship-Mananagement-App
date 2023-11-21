import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img1 from './final.jpg';
import AddCustomer from './addcust';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = async () => {
    try {
      alert('Logout successful');
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error.message);
      alert('cannot log out');
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = ['/', '/register','/terms'].includes(location.pathname);
  if (isAuthPage) {
    return null;
  }

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button component={Link} to="/home">
                  Home
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button component={Link} to="/add-customer">
                  Add Customer
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button component={Link} to="/customer-details">
                  Customer Details
                </Button>
              </MenuItem>
            </Menu>

            <img src={img1} alt="logo" width={180} height={50} style={{ marginRight: '20px', borderRadius:'2px' }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/home"
                sx={{
                  fontSize: 18,
                  marginLeft: 5,
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#287BC7',
                  },
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/add-customer"
                sx={{
                  fontSize: 18,
                  marginLeft: 5,
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#287BC7',
                  },
                }}
              >
                Add Customer
              </Button>
              <Button
                component={Link}
                to="/customer-details"
                sx={{
                  fontSize: 18,
                  marginLeft: 5,
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#287BC7',
                  },
                }}
              >
                Customer Details
              </Button>
            </Box>

            {isAuthPage ? null : (
              <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p:0, '&:hover': { border: '2px dashed grey' } }}
                  >
                    <LoginIcon style={{ fontSize: 45, color: 'grey' }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{mt:6}}
                >
                  {/* {settings.map((setting) => ( */}
                    <MenuItem
                    //  key={setting}
                      onClick={handleCloseUserMenu} >
                      <Typography textAlign="center" onClick={handleLogout}>Log out</Typography>
                    </MenuItem>
                  {/* ))} */}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;