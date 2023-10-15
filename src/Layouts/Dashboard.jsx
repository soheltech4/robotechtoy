import React, { useContext } from 'react';
import { FaBars, FaBox, FaHome, FaLayerGroup, FaLocationArrow, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {

    const [cart] = useCart()
    const location = useLocation()
    const { user } = useContext(AuthContext)

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
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-lg min-h-full bg-base-200  text-base-content">
                    <Link to={"/"}><img className='w-full' src="https://i.ibb.co/wKvm3Cg/logo.png" alt="" /></Link>
                    <div className='p-5 pl-10 flex justify-center items-center'>
                        <img src={user?.photoURL} className='w-1/2 rounded-full items-center pb-2' alt="" />
                        <div className='px-4'>
                        <p className='uppercase font-bold text-2xl'>{user?.displayName}</p>
                        <p className=''>{user?.email}</p>
                        </div>
                    </div>
                    <div>
                        <li>
                            <Link to="myprofile"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === 'dashboard/myprofile' ? 'active-link bg-white bg-opacity-30' : ''}`}>
                                <FaUser className='text-purple-600' />My Profile
                            </Link>
                        </li>

                        <li>
                            <Link to="mycart"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/mycart' ? 'active-link bg-white bg-opacity-30 ' : ''}`}>
                                <FaShoppingCart className='text-purple-600' />My Cart<span className="badge badge-accent font-bold">{cart?.length || 0}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="addtoy"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/addtoy' ? 'active-link bg-white bg-opacity-30' : ''}`}>
                                <FaBox className='text-purple-600' />Add Toy
                            </Link>
                        </li>
                        <li>
                            <Link to="mytoy"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/mytoy' ? 'active-link bg-white bg-opacity-30' : ''}`}>
                                <FaLayerGroup className='text-purple-600' />My Toy
                            </Link>
                        </li>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <li>
                            <Link to="/"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/' ? 'active-link bg-white bg-opacity-30 ' : ''}`}>
                                <FaHome className='text-purple-600' />Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/alltoys"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/alltoys' ? 'active-link bg-white bg-opacity-30 ' : ''}`}>
                                <FaBars className='text-purple-600' />All Toys
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/contact' ? 'active-link bg-white bg-opacity-30 ' : ''}`}>
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