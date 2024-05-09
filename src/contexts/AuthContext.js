import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, 
 } from '../config/firebase';
 import { signInWithGoogle
 } from '../functions/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const logoutUser = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, loginWithEmail, registerWithEmail, signInWithGoogle, logoutUser, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
