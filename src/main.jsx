import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AddCraft from './Pages/AddCraft.jsx';
import AllArtAndCrafts from './Pages/AllArtAndCrafts.jsx';
import MyArtAndCrafts from './Pages/MyArtAndCrafts.jsx';
import LogIn from './Pages/LogIn.jsx';
import Registration from './Pages/Registration.jsx';
import CraftDetails from './Pages/CraftDetails.jsx';
import Errorpage from './Pages/Errorpage.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './PriviteRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/add-craft",
        element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path:"/all-art-and-crafts",
        element:<AllArtAndCrafts></AllArtAndCrafts>
      },
      {
        path:"/my-art-and-crafts",
        element:<PrivateRoute><MyArtAndCrafts></MyArtAndCrafts></PrivateRoute>
      },
      {
        path:"/log-in",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Registration></Registration>
      },
      {
        path:"/craft-details",
        element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
     <RouterProvider router={router} />
     </React.StrictMode>,
  </AuthProvider>
)
