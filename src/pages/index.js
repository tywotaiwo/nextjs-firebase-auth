import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { user, logoutUser } = useAuth();

    return (
        <nav>
            {user ? (
                <button onClick={logoutUser}>Logout</button>
            ) : (
                <button onClick={() => setModalOpen(true)}>Login</button>
            )}
            <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </nav>
    );
};

export default Navbar;
