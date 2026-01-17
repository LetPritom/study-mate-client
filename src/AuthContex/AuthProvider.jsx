import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider ;
const facebookProvider = new FacebookAuthProvider;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    // register password and email

    const registerEmailAndPassFunc = (email , password) => {
        return createUserWithEmailAndPassword (auth , email ,password)
    };

    //  login with email and password

    const signInWithEmailAndPassFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password);
    }

    // updateProfile funtion

    const updateProfileFunction = (displayName , photoURL) => {
        setLoading(true)

        return updateProfile (auth.currentUser , {
            displayName,
            photoURL
        });
    };

    // sign in with google account 

    const signInWithGoogleFunc = () => {
        setLoading(true)
        return signInWithPopup(auth , googleProvider) ;
    }

    // sign in with facebook

    const signInWithFacebookFunc = () => {
        setLoading(true)
        return signInWithPopup(auth , facebookProvider);
    }

    // logout function

    const logoutFunction = () => {
        setLoading(true)
           return signOut(auth);
    };


    // onAuthStateChange

    useEffect ( () => {
        const unsubscribe = onAuthStateChanged (auth , (currUser) => {
            setUser(currUser);
            setLoading(false);
        })
        return () => {
            unsubscribe ();
        } 
    } , []);
    const authInfo ={
        registerEmailAndPassFunc,
        signInWithEmailAndPassFunc,
        signInWithFacebookFunc,
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