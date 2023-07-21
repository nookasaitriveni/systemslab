import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import Header from './Header';
import FooterPage from '../../views/dashboard/Default/FooterPage';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0
}));

const MainLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const mainPadding = `40px 20px ${footerHeight + 125}px 10px`;

  useEffect(() => {
    const headerElement = document.querySelector('header'); // Replace 'header' with the actual selector for your header component
    const footerElement = document.querySelector('footer'); // Replace 'footer' with the actual selector for your footer component

    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
    if (footerElement) {
      setFooterHeight(footerElement.offsetHeight);
    }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Main style={{ padding: mainPadding }} id="main-section">
        <Outlet />
      </Main>
      <FooterPage />
    </Box>
  );
};

export default MainLayout;
