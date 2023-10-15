import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)
const location = useLocation()
// console.log(location)
if(loading){
    return <div className='flex justify-center items-center mt-72'><span className="loading loading-ring w-24"></span></div>
}

if(user){
    return children
}
    return <Navigate to ='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;