import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
// import your components directly
import DashboardDefault from 'views/dashboard/Default';
import AboutGroupPI from 'views/AboutGroupPI';
import Team from 'views/Team';
import Research from 'views/Research';
import Teaching from 'views/Teaching';
import Publications from 'views/Publications';
import Gallery from 'views/Gallery';
import Opportunity from 'views/Opportunity';
import Contact from 'views/Contact';
import Collaborations from 'views/Collaborations';
import NotFound from 'views/NotFound';

const ThemeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<DashboardDefault />} />
        <Route path="/about" element={<AboutGroupPI />} />
        <Route path="/research" element={<Research />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ThemeRoutes;
