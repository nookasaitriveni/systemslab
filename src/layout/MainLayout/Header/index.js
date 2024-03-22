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
import MenuOpenIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link as RouterLink } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import SystemLab from './Phylab8.png';
import './index.css';
import Container from '@mui/material/Container';
const drawerWidth = 300;
const navItems = ['Home', 'About', 'Contact'];
import ReactDOM from 'react-dom';

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
    const anchor = (event.target.ownerDocument || document).querySelector('#main-section');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'top'
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'right', mr: '30px' }}>
      {/* <Link component={RouterLink} to="/" underline="none" sx={{ mx: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={SystemLab} alt="SystemLab" style={{ transform: 'scale(1.3)', marginTop: '10px' }} className="logo_icon" />
       
      </Link>
      <br />
      <Divider />
      
      <Divider /> */}

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
      {/* <Toolbar id="back-to-top-anchor" style={{ padding: '0' }} /> */}
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: '#800020', //theme.palette.background.default
            zIndex: 9999
          }}
        >
          <Toolbar>
            <Box
              className="logo_section"
              sx={{
                width: 400,
                display: 'flex'
              }}
            >
              <Box component="span" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Link component={RouterLink} to="/" underline="none" sx={{ mx: 1, display: 'flex', alignItems: 'center' }}>
                  <img src={SystemLab} alt="SystemLab" style={{ transform: 'scale(1.3)' }} className="logo_icon" />
                  {/* <Typography variant="h1" component="div" sx={{ ml: 3, fontSize: '15px', fontWeight: 'bold', color: 'white' }}> */}
                  {/* <span style={{ whiteSpace: 'nowrap', color: 'white', fontSize: '2.5rem' }}>SysTEMs Lab</span> */}
                  {/* <br /> */}
                  {/* <span style={{ whiteSpace: 'nowrap', color: 'white', fontSize: '1.5rem' }}>Systems Medicine and Therapeutic Engineering</span> */}
                  {/* </Typography> */}
                </Link>
              </Box>
            </Box>

            <Box className="links_section" sx={{ flexGrow: 1, display: { textAlign: 'right' } }}>
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

              {/* {copiedData ? <div className="language_google" dangerouslySetInnerHTML={{ __html: copiedData }} /> : <p>Loading languages</p>} */}

              <Button>
                <Link component={RouterLink} to="/" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Home
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/about" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    About PI
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/research" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Research
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/team" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Team
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/teaching" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Teaching
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/publications" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Publications
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/collaborations" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Collaborations
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/gallery" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Gallery
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/opportunity" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Opportunity
                  </Typography>
                </Link>
              </Button>
              <Button>
                <Link component={RouterLink} to="/contact" color="inherit" underline="none" sx={{ mx: 1 }}>
                  <Typography variant="body1" style={{ color: 'white ', fontWeight: 'bold', fontSize: '15px' }}>
                    Contact
                  </Typography>
                </Link>
              </Button>
            </Box>
            <Box className="lang-box">
              <div id="google_translate_element" gt-trigger="selectLanguage"></div>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              className="open_drawer"
              sx={{ flexShrink: 0, zIndex: 999, color: 'white', margin: 'auto', marginRight: '0' }}
            >
              {/* <MenuIcon /> */}
              {mobileOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Box component="nav" sx={{ mt: 10 }}>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="top"
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true // Better open performance on mobile.
          // }}
          // ModalProps={{
          //   container: document.getElementById('root'), // Specify the root element ID
          //   style: { position: 'absolute' } // Adjust position to bottom
          // }}
          className="drawer_content"
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', backgroundColor: '#800020', pt: 9 },
            zIndex: theme.zIndex.appBar + 1
          }}
        >
          {drawer}
        </Drawer>
        {/* 
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top" style={{ background: '#ffffff' }}>
            <KeyboardArrowUpIcon style={{ color: '#232434 ', fontSize: 30 }} />
          </Fab>
        </ScrollTop> */}
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
