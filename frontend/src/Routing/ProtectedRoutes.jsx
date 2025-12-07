import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'


function ProtectedRoutes({ isAuthentication, user, children }) {
    const location = useLocation();

    //user cant move to cart or checkout page without login
    if (!isAuthentication && (location.pathname.includes('/cart')
        || location.pathname.includes('/checkout') || location.pathname.includes('/myorder'))) {

        return <Navigate to='/login' />
    }
    // if user is login then he cant move to login or registration page again
    if (isAuthentication && (location.pathname.includes('/login')
        || location.pathname.includes('/registration'))) {
        if (user.role === "admin") {
            return <Navigate to="/admin-dashboard" />
        }
        else {
            return <Navigate to="/" />
        }
    }
    //normal user cant access admin page 
    if (isAuthentication && user.role !== "admin"
        && location.pathname.includes('/admin-dashboard')) {
        return <Navigate to='/unauthorize-page' replace />
    }
    return children;
}

export default ProtectedRoutes