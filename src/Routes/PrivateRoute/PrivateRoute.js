import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Login from '../../Pages/Login/Login';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
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
        return <Login />
    }
};

export default PrivateRoute;