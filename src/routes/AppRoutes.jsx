import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import HomePage from '../pages/HomePage';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PublicRoutes />}>
                    <Route path="/SignUp" element={<SignUpPage />} />
                    <Route path="/SignIn" element={<SignInPage />} />
                </Route>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/*" element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
