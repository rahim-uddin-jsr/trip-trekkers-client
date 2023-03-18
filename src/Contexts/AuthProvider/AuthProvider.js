import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
    const gitHubLogin = () => {
        const githubProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useState(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
        })
    }, [])
    const authInfo = { user, isLoading, loginWithEmailPassword, registerWithEmailPass, logOut, handleGoogleSignIn, gitHubLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;