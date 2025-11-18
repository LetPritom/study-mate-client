import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


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
                path:'/signup',
                element:<Register></Register>
            }
        ]
    }
])