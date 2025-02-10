import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './App.css';
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
import SubdirectoryDetail from './routes/streetsDirectory/subdirectorydetail.jsx';
import ChurchesAbout from './routes/mtOliveArchive/churchesabout.jsx';
import HistoryOfPastors from './routes/mtOliveArchive/historyofpastors.jsx';
import HistoryOfLifeEvents from './routes/mtOliveArchive/historyoflifeevents.jsx'; // Import the new HistoryOfLifeEvents component
import HistoryOfChoir from './routes/mtOliveArchive/historyofchoir.jsx'; // Import the new HistoryOfChoir component
import ChurchEventsActivities from './routes/mtOliveArchive/churcheventsactivities.jsx'; // Import the new ChurchEventsActivities component
import Obituaries from './routes/mtOliveArchive/obituaries.jsx'; // Import the new Obituaries component
import Birthdays from './routes/mtOliveArchive/birthdays.jsx'; // Import the new Birthdays component
import Graduations from './routes/mtOliveArchive/graduations.jsx'; // Import the new Graduations component

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
      {
        path: "churchesabout/",
        element: <ChurchesAbout />,
      },
      {
        path: "historyofpastors/",
        element: <HistoryOfPastors />,
      },
      {
        path: "historyoflifeevents/",
        element: <HistoryOfLifeEvents />,
      },
      {
        path: "historyofchoir/",
        element: <HistoryOfChoir />,
      },
      {
        path: "churcheventsactivities/",
        element: <ChurchEventsActivities />,
      },
      {
        path: "obituaries/",
        element: <Obituaries />, // Add route for Obituaries
      },
      {
        path: "birthdays/",
        element: <Birthdays />, // Add route for Birthdays
      },
      {
        path: "graduations/",
        element: <Graduations />, // Add route for Graduations
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
