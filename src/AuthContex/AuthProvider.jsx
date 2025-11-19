import React from 'react';
import { AuthContext } from './AuthContext';
import { LiaChildSolid } from 'react-icons/lia';

const AuthProvider = ({children}) => {

    const authInfo ={
        
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;