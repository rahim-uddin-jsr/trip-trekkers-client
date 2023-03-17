import React, { createContext, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const handleGoogleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(user, auth, googleAuthProvider)
    }
    const gitHubLogin = () => {
        const githubProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubProvider)
    }
    useState(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return unSubscribe()

    }, [])
    const authInfo = { handleGoogleSignIn, gitHubLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;