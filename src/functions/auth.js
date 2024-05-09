import { auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from '../config/firebase';

// Sign in with Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // Additional user info or actions
  } catch (error) {
    console.error(error);
  }
};

// Sign in with Email and Password
const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    // Additional user info or actions
  } catch (error) {
    console.error(error);
  }
};

// Logout
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { signInWithGoogle, signInWithEmail, logout };
