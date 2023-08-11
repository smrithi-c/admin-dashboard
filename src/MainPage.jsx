import {onAuthStateChanged, signOut} from "firebase/auth"
import React, {useEffect, useState} from "react"
import { auth } from "./firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import {createUserWithEmailAndPassword} from "firebase/auth"
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AuthDetails from './AuthDetails'

const MainPage = () => {
    return (
        <div className = "Main Page">
        <SignIn />
      <SignUp />
      <AuthDetails/>
        </div>


    );
};
export default MainPage;


