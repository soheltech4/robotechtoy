import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    const location = useLocation()
    const [cart] = useCart()

    const handleLogOut = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .error(error => console.log(error.message))
    }

    const Nav =
        <>
            <Link to="/" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/' ? 'active-link bg-white bg-opacity-80 text-black' : ''}`}>Home</Link>

            <Link to="/alltoys" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/alltoys' ? 'active-link bg-white bg-opacity-80 text-black' : ''}`}>All Toys</Link>

            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>Blogs</Link></a>
            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>Contact</Link></a>
        </>

    return (
        <div>
            <div className="navbar fixed bg-opacity-90 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Nav}
                        </ul>
                    </div>
                    <Link to={"/"}><img className='w-56' src="https://i.ibb.co/wKvm3Cg/logo.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {Nav}
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center items-center gap-x-2 md:gap-x-5">
                        {user ?
                            <div>
                                <Link to="dashboard/mycart">
                                    <div className="flex justify-center items-center md:gap-1 rounded-full">
                                        <h1><FaShoppingCart className='text-purple-600 ' /></h1>
                                        <div className="badge badge-accent"><span className="font-bold">{cart?.length || 0}</span></div>
                                    </div>
                                </Link>
                            </div> 
                            : 
                            <></>

                        }
                        <div className="dropdown flex justify-center dropdown-end pr-2 md:pr-5">
                            {user ?
                                <div>
                                    <label className="">
                                        <div className="">
                                            <Link><a className="hover:bg-white hover:duration-1000 hover:text-black">
                                                {user.photoURL ?
                                                    <img className='w-8 rounded-full' src={user?.photoURL}></img>
                                                    :
                                                    <FaUserCircle size={35} />
                                                }
                                            </a></Link>
                                        </div>

                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between hover:bg-white  hover:duration-1000 hover:text-black">
                                                <Link to="/dashboard">{user.displayName}</Link>
                                            </a>
                                        </li>
                                        <li><button onClick={handleLogOut} className="hover:bg-white  hover:duration-1000 hover:text-black">Logout</button></li>
                                    </ul>
                                </div>
                                :
                                <label className="pl-16">
                                    <div className="">
                                        <Link to={"/login"}><a title='Login' className="hover:bg-white hover:duration-1000 hover:text-black">
                                            <FaUserCircle size={30} /></a></Link>
                                    </div>
                                </label>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;