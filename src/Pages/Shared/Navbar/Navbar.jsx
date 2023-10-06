import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .error(error => console.log(error.message))
    }

    const Nav =
        <>
            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>Home</Link></a>
            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>All Toys</Link></a>
            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>My Toys</Link></a>
            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>Add A Toy</Link></a>
            <a className='px-3 hover:bg-white rounded-md hover:duration-1000 hover:text-black'><Link>Blogs</Link></a>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            {user ?
                                <div>
                                    <label className="pl-16">
                                        <div className="">
                                            <Link><a className="hover:bg-white hover:duration-1000 hover:text-black">
                                                {user.photoURL ?
                                                    <img className='w-10 rounded-full' src={user?.photoURL}></img>
                                                    :
                                                    <FaUserCircle size={35} />
                                                }
                                            </a></Link>
                                        </div>

                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between hover:bg-white  hover:duration-1000 hover:text-black">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <li><button onClick={handleLogOut} className="hover:bg-white  hover:duration-1000 hover:text-black">Logout</button></li>
                                    </ul>
                                </div>
                                :
                                <label className="pl-16">
                                    <div className="">
                                        <Link to={"/login"}><a className="hover:bg-white hover:duration-1000 hover:text-black">
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