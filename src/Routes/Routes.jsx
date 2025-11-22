import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreatePartner from "../Pages/CreatePartner";
import Myconnection from "../Pages/Myconnection";
import FindPartner from "../Pages/FindPartner";
import Private from "../PrivateRoutes/Private";
import Profile from "../Pages/Profile";
import PartnerDetails from "../Pages/PartnerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Private><Profile></Profile></Private>,
      },
      {
        path: "/create-partner",
        element: (
          <Private>
            <CreatePartner></CreatePartner>
          </Private>
        ),
      },
      {
        path: "/partnersDetails/:id",
        element: (
          <Private>
            <PartnerDetails></PartnerDetails>
          </Private>
        ),
      },
      {
        path: "/my-connection",
        element: <Private><Myconnection></Myconnection></Private>,
      },
      {
        path: "/find-partner",
        element: <FindPartner></FindPartner>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
