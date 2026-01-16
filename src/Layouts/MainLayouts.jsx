import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className="div flex-1">
                <Outlet />
            </div>
                
            <Footer />
        </div>
    );
};

export default MainLayouts;