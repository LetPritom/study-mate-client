import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { RingLoader } from 'react-spinners';
import { AuthContext } from '../AuthContex/AuthContext';

const Private = ({children}) => {

    const {user , loading} = use(AuthContext);

    const location = useLocation()
    if(loading) {
        return <div className="div h-[90vh] flex justify-center items-center">
            <RingLoader color='#ff9c07d7'/>
        </div>
    }
    if(!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children
};

export default Private;