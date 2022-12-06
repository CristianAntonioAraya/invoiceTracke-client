import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/signIn');
    };
    return (
        <div className='navbar_container'>
            <h2>Invoice Tracker</h2>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Navbar;
