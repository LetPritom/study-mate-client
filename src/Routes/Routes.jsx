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
import UpdateForm from "../Pages/UpdateForm";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import About from "../Pages/Aboute/About";
import Support from "../Pages/Support/Support";
import StudentHelp from "../Pages/Support/StudentHelp/StudentHelp";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Privacy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/profile",
        element: (
          <Private>
            <Profile></Profile>
          </Private>
        ),
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
        element:
            <PartnerDetails></PartnerDetails>
      },
      {
        path: "/update/:upId",
        element: (
          <Private>
            <UpdateForm></UpdateForm>
          </Private>
        ),
      },
      {
        path: "/my-connection",
        element: (
          <Private>
            <Myconnection></Myconnection>
          </Private>
        ),
      },
      {
        path: "/find-partner",
        element: <FindPartner></FindPartner>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/student-help",
        element: <StudentHelp></StudentHelp>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
  path:'/dashboard',
  element:<Private>
    <DashboardLayout></DashboardLayout>
  </Private>,
  children:[
    {
      index:true,
      element:<Dashboard></Dashboard>
    },
    {
      path:'my-connection',
      element:<Myconnection></Myconnection>
    },
    {
      path:'create-partner',
      element:<CreatePartner></CreatePartner>
    },
    {
      path:'profile',
      element:<Profile></Profile>
    },
  ]
}
]);

