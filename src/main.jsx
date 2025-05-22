import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
import Churchesnavbar from './routes/mtOliveArchive/churchesnavbar.jsx';
import History from './routes/mtOliveArchive/history.jsx';
import Archive from './routes/mtOliveArchive/archive.jsx';
import Pastors from './routes/mtOliveArchive/pastors.jsx';
import ChoirRecords from './routes/mtOliveArchive/choirRecords.jsx';
import LifeEvents from './routes/mtOliveArchive/lifeEvents.jsx';
import ChurchMaterials from './routes/mtOliveArchive/churchMaterials.jsx';
import Photographs from './routes/mtOliveArchive/photographs.jsx';



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
  {
    path: 'churches/',
    element: <Churchesnavbar />,
    errorElement: <ErrorPage />,
    children: [
      { index: false, element: <Churches /> },
      {
        path: '/churches/',
        element: <Churches />,
      },
      {
        path: "history/",
        element: <History />,
      },
      {
        path: "archive/",
        element: <Archive />,
      },
      {
        path: "pastors/",
        element: <Pastors />,
      },
      {
        path: "choirRecords/",
        element: <ChoirRecords/>,
      },
      {
        path: "lifeEvents/",
        element: <LifeEvents/>,
      },
      {
        path: "churchMaterials/",
        element: <ChurchMaterials/>,
      },
      {
        path: "photographs/",
        element: <Photographs/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
