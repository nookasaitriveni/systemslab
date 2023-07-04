import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const AboutGroupPI = Loadable(lazy(() => import('views/AboutGroupPI')));
const Team = Loadable(lazy(() => import('views/Team')));
const Research = Loadable(lazy(() => import('views/Research')));
const Teaching = Loadable(lazy(() => import('views/Teaching')));
const Publications = Loadable(lazy(() => import('views/Publications')));
const Gallery = Loadable(lazy(() => import('views/Gallery')));
const Opportunity = Loadable(lazy(() => import('views/Opportunity')));
const Contact = Loadable(lazy(() => import('views/Contact')));
const Collaborations = Loadable(lazy(() => import('views/Collaborations')));

// Page Not Found component
const NotFound = Loadable(lazy(() => import('views/NotFound')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <DashboardDefault />
      },
      {
        path: '/about',
        element: <AboutGroupPI />
      },
      {
        path: '/research',
        element: <Research />
      },
      {
        path: '/team',
        element: <Team />
      },
      {
        path: '/teaching',
        element: <Teaching />
      },
      {
        path: '/publications',
        element: <Publications />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/opportunity',
        element: <Opportunity />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/collaborations',
        element: <Collaborations />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default MainRoutes;
