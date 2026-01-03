import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '0px' }}>  {/* Navbar height অনুযায়ী */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;