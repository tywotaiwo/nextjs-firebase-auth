import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Auth.module.css'; // Import CSS module

const AuthModal = ({ isOpen, onClose }) => {
    const { signInWithGoogle, loginWithEmail, registerWithEmail, user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => loginWithEmail(email, password);
    const handleRegister = () => registerWithEmail(email, password);
    const handleGoogleSignIn = () => signInWithGoogle();

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                {!user ? (
                    <>
                        <input
                            className={styles.inputField}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            className={styles.inputField}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button className={`${styles.button}`} onClick={handleLogin}>Login</button>
                        <button className={`${styles.button}`} onClick={handleRegister}>Sign Up</button>
                        <button className={`${styles.button} ${styles.googleButton}`} onClick={handleGoogleSignIn}>
                            🌐 Sign in with Google
                        </button>
                    </>
                ) : (
                    <button className={styles.button} onClick={onClose}>Close</button>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
