import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './App.css';
import Navbar from './routes/navbar.jsx';
import ErrorPage from './error-page.jsx';
import Team from './routes/contact.jsx';
import Home from './routes/home.jsx';
import People from './routes/people.jsx';
import About from './routes/about.jsx';
import Streets from './routes/streets.jsx';
import FlintPark from './routes/flintfloralpark.jsx';
import StJohn from './routes/stjohns.jsx';
import Churches from './routes/churches.jsx';
import DirectoryDetail from './routes/directorydetail.jsx';
import SubdirectoryDetail from './routes/subdirectorydetail.jsx';
import ChurchesAbout from './routes/churchesabout.jsx';
import HistoryOfPastors from './routes/historyofpastors.jsx';
import HistoryOfLifeEvents from './routes/historyoflifeevents.jsx'; // Import the new HistoryOfLifeEvents component
import HistoryOfChoir from './routes/historyofchoir.jsx'; // Import the new HistoryOfChoir component
import ChurchEventsActivities from './routes/churcheventsactivities.jsx'; // Import the new ChurchEventsActivities component
import Obituaries from './routes/obituaries.jsx'; // Import the new Obituaries component
import Birthdays from './routes/birthdays.jsx'; // Import the new Birthdays component
import Graduations from './routes/graduations.jsx'; // Import the new Graduations component

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
