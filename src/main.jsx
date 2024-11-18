import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './App.css'
import Navbar from './routes/navbar.jsx';
import ErrorPage from './error-page.jsx';
import Team from './routes/contact.jsx';
import Home from './routes/home.jsx'
import People from './routes/people.jsx'
import About from './routes/about.jsx'
import Streets from './routes/streets.jsx'
import FlintPark from './routes/flintfloralpark.jsx'
import StJohn from './routes/stjohns.jsx'
import Churches from './routes/churches.jsx'


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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
