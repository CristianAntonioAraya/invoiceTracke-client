import React from 'react';
import Navbar from '../components/Navbar';
import ShowInvoices from '../components/showInvoices';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
    return (
        <div className="page_container">
            <div className="home_container">
                <Navbar />
                <div className="home_body">
                    <ShowInvoices />
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
