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
import UpdateCrafts from './Pages/UpdateCrafts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/crafts')
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
        element:<PrivateRoute><MyArtAndCrafts></MyArtAndCrafts></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/crafts')
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
        path:"/craft-details/:id",
        element:<PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        loader:()=>fetch("http://localhost:5000/crafts")
      },
      {
        path:"/update-craft/:id",
        element:<PrivateRoute><UpdateCrafts></UpdateCrafts></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/crafts/${params.id}`)
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
