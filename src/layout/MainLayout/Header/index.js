import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link as RouterLink } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import SystemLab from './Syslab7.png';

import Container from '@mui/material/Container';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}>
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h1" sx={{ my: 2 }}>
        SystemsLab
      </Typography>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <Box sx={{ flexGrow: 1 }} key={item}>
            <Link component={RouterLink} to="/about" color="inherit" underline="none" sx={{ mx: 1 }}>
              <Typography variant="body1" style={{color: 'white ', fontWeight: 'bold'}}>{item}</Typography>
            </Link>
          </Box>
        ))} */}
        <Link component={RouterLink} to="/" color="white " underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Home
          </Typography>
        </Link>
        <Link component={RouterLink} to="/about" color="white " underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            About PI
          </Typography>
        </Link>
        <Link component={RouterLink} to="/research" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Research
          </Typography>
        </Link>
        <Link component={RouterLink} to="/team" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Team
          </Typography>
        </Link>
        <Link component={RouterLink} to="/teaching" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Teaching
          </Typography>
        </Link>
        <Link component={RouterLink} to="/publications" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Publications
          </Typography>
        </Link>
        <Link component={RouterLink} to="/collaborations" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Collaborations
          </Typography>
        </Link>
        <Link component={RouterLink} to="/gallery" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Gallery
          </Typography>
        </Link>
        <Link component={RouterLink} to="/opportunity" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Opportunity
          </Typography>
        </Link>
        <Link component={RouterLink} to="/contact" color="inherit" underline="none" sx={{ mx: 1 }}>
          <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
            Contact
          </Typography>
        </Link>
        {/* <Link component={RouterLink} to="/ioe" color="inherit" underline="none" sx={{ mx: 1 }}>
          <img src={DEP} alt="DEP" style={{ height: '50px' }} />
        </Link>
        <Link component={RouterLink} to="/uoh" color="inherit" underline="none" sx={{ mx: 1 }}>
          <img src={UOH} alt="UOH" style={{ height: '50px' }} />
        </Link>
        <Link component={RouterLink} to="/ioe" color="inherit" underline="none" sx={{ mx: 1 }}>
          <img src={IOE} alt="IOE" style={{ height: '50px' }} />
        </Link>
        <Link component={RouterLink} to="/ioe" color="inherit" underline="none" sx={{ mx: 1 }}>
          <img src={MOE} alt="MOE" style={{ height: '50px' }} />
        </Link> */}
      </List>
    </Box>
  );

  // <ListItem key={item} disablePadding>
  //   <ListItemButton sx={{ textAlign: 'center' }}>
  //     <ListItemText primary={item} />
  //   </ListItemButton>
  // </ListItem>
  const container = window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: '#990000' //theme.palette.background.default
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                width: 228,
                display: 'flex',
                [theme.breakpoints.down('md')]: {
                  width: 'auto'
                }
              }}
            >
              <Box component="span" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Link component={RouterLink} to="/" underline="none" sx={{ mx: 1, display: 'flex', alignItems: 'center' }}>
                  <img src={SystemLab} alt="SystemLab" style={{ height: '85px', transform: 'scale(1.3)' }} />
                  <Typography variant="h1" component="div" sx={{ ml: 3, fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>
                    <span style={{ whiteSpace: 'nowrap', color: 'white', fontSize: '3rem' }}>SysTEMs Lab</span>
                    <br />
                    <span style={{ whiteSpace: 'nowrap', color: 'white' }}>Systems Medicine and Therapeutic Engineering</span>
                  </Typography>
                </Link>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', textAlign: 'right' } }}>
              {/* <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
                <img src={DEP} alt="DEP" style={{ height: '50px' }} />
              </Link>
              <Link component={RouterLink} to="/uoh" underline="none" sx={{ mx: 1 }}>
                <img src={UOH} alt="UOH" style={{ height: '50px' }} />
              </Link>
              <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
                <img src={IOE} alt="IOE" style={{ height: '50px' }} />
              </Link>
              <Link component={RouterLink} to="/ioe" underline="none" sx={{ mx: 1 }}>
                <img src={MOE} alt="MOE" style={{ height: '50px' }} />
              </Link>
              <br /> */}
              <Button>
                <Link component={RouterLink} to="/" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Home
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/about" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    About PI
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/research" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Research
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/team" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Team
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/teaching" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Teaching
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/publications" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Publications
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/collaborations" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Collaborations
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/gallery" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Gallery
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/opportunity" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Opportunity
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/contact" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold' }}>
                    Contact
                  </Typography>
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" style={{ padding: '0' }} />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" style={{ background: '#ffffff' }}>
          <KeyboardArrowUpIcon style={{ color: 'white ', fontSize: 30 }} />
        </Fab>
      </ScrollTop>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default Header;
