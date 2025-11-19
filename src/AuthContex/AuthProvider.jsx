import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { LiaChildSolid } from 'react-icons/lia';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider ;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    console.log(user)
    const [loading , setLoading] = useState(true);

    // register password and email

    const registerEmailAndPassFunc = (email , password) => {
        return createUserWithEmailAndPassword (auth , email ,password)
    };

    //  login with email and password

    const signInWithEmailAndPassFunc = (email, password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    // updateProfile funtion

    const updateProfileFunction = (displayName , photoURL) => {

        return updateProfile (auth.currentUser , {
            displayName,
            photoURL
        });
    };

    // sign in with google account 

    const signInWithGoogleFunc = () => {
        return signInWithPopup(auth , googleProvider) ;
    }

    // logout function

    const logoutFunction = () => {
           return signOut(auth);
    };

    const authInfo ={
        registerEmailAndPassFunc,
        signInWithEmailAndPassFunc,
        updateProfileFunction,
        signInWithGoogleFunc,
        logoutFunction,
        loading,
        setLoading,
        setUser,
        user,
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;