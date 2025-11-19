import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import CreatePartner from '../Pages/CreatePartner';
import Myconnection from '../Pages/Myconnection';
import FindPartner from '../Pages/FindPartner';


export const router = createBrowserRouter([
    {
        path :'/' ,
        element:<MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [

            {
                index:true ,
                element:<Home></Home>
            } ,

            {
                path:'/login',
                element:<Login></Login>

            },
            {
                path:'/create-partner',
                element:<CreatePartner></CreatePartner>

            },
            {
                path:'/my-connection',
                element:<Myconnection></Myconnection>

            },
            {
                path:'/find-partner',
                element:<FindPartner></FindPartner>

            },

            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])