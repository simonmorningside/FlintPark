import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';  // Site-wide styles
import './styles/home-page.css';  // Home Page-specific styles
import './styles/streets-page.css';  // Streets Page-specific styles
import './styles/videos-page.css';  // People Page-specific styles
import './styles/team-page.css';  // Team Page-specific styles
import './styles/text-files-page.css';  // Text Files Page-specific styles
import './App.css';
// Your other imports and component code here
import Navbar from './routes/navigationBar/navbar.jsx';
import ErrorPage from './error-page.jsx';
import Team from './routes/navigationBar/teamPage.jsx';
import Home from './routes/navigationBar/homePage.jsx';
import People from './routes/navigationBar/videoPage.jsx';
import About from './routes/navigationBar/aboutPage.jsx';
import Streets from './routes/navigationBar/neighborhoodsPage.jsx';
import FlintPark from './routes/streetsDirectory/flintfloralpark.jsx';
import StJohn from './routes/streetsDirectory/stjohns.jsx';
import Churches from './routes/mtOliveArchive/churches.jsx';
import DirectoryDetail from './routes/streetsDirectory/directorydetail.jsx';
import SubdirectoryDetail from './routes/streetsDirectory/subdirectorydetail.jsx';// Import the new Graduations component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "team/",
        element: <Team />,
      },
      {
        path: "people/",
        element: <People />,
      },
      {
        path: "home/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "streets/",
        element: <Streets />,
      },
      {
        path: "churches/",
        element: <Churches />,
      },
      {
        path: "flintfloralpark/",
        element: <FlintPark />,
      },
      {
        path: "stjohns/",
        element: <StJohn />,
      },
      {
        path: "/directory/:directory",
        element: <DirectoryDetail />,
      },
      {
        path: "/directory/:directory/:subdirectory",
        element: <SubdirectoryDetail />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
