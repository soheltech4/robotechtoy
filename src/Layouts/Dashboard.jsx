import React from 'react';
import { FaBars, FaBox, FaHome, FaLocationArrow, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {

    const [cart] = useCart()
    const location = useLocation()


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
            </div>
            <label className="flex-none lg:hidden">
                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </label>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 bg-opacity-30 text-base-content">
                    <div>
                        <li>
                            <Link to="myprofile"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === 'dashboard/myprofile' ? 'active-link bg-white bg-opacity-80' : ''}`}>
                                <FaUser className='text-purple-600' />My Profile
                            </Link>
                        </li>

                        <li>
                            <Link to="mycart"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/mycart' ? 'active-link bg-white bg-opacity-80 ' : ''}`}>
                                <FaShoppingCart className='text-purple-600' />My Cart<span className="badge badge-accent font-bold">{cart?.length || 0}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="addtoy"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/addtoy' ? 'active-link bg-white bg-opacity-80' : ''}`}>
                                <FaBox className='text-purple-600' />Add Toy
                            </Link>
                        </li>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <li>
                            <Link to="/"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/' ? 'active-link bg-white bg-opacity-80 ' : ''}`}>
                                <FaHome className='text-purple-600' />Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/alltoys"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/alltoys' ? 'active-link bg-white bg-opacity-80 ' : ''}`}>
                                <FaBars className='text-purple-600' />All Toys
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/contact' ? 'active-link bg-white bg-opacity-80 ' : ''}`}>
                                <FaLocationArrow className='text-purple-600' />Contact
                            </Link>
                        </li>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;