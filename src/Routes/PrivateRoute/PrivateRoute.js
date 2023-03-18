import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation()
    if (isLoading) {
        return (
            <div className='vw-100 text-center'>
                <div class="spinner-border text-success" role="status">
                    <span class="sr-only "></span>
                </div>
            </div>
        );
    }
    if (user?.email) {
        return children
    }
    else {
        return <Navigate to='/login' state={{ form: location }} replace></Navigate>
    }
};

export default PrivateRoute;