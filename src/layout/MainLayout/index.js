import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

import Header from './Header';
import FooterPage from '../../views/dashboard/Default/FooterPage';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Main style={{ padding: '40px 10px 125px 10px' }}>
        <Outlet />
      </Main>
      <FooterPage />
    </Box>
  );
};

export default MainLayout;
