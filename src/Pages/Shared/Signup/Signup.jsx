import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {

    const {createUser} = useContext(AuthContext)


    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            const logeduser = result.user 
            console.log(logeduser)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Signup Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }


    return (
        <div>
            <div className="pt-20 pb-20 p-3 bg-base-200 flex justify-center">
                <div className="hero-content bg-slate-600 rounded-md p-10 gap-20 grid md:flex">
                    <div className=" rounded-none md:w-full flex-shrink-0 max-w-sm justify-center">
                        <img src="https://i.ibb.co/wKvm3Cg/logo.png" alt="" />
                        <div className='pt-10'>
                            <Link className='text-center hover:bg-black hover:border-teal-200 justify-center input flex items-center gap-5 '>
                                <h1>Sign in with Google </h1>
                                <a><FaGoogle /></a>
                            </Link>
                            <Link className='text-center hover:bg-black hover:border-teal-200 mt-5 justify-center input flex items-center gap-5 '>
                                <h1>Sign in with Github </h1>
                                <a><FaGithub /></a>
                            </Link>
                        </div>

                        <div className='text-center text-gray-50 my-5'><h1>---------------------------</h1></div>

                        <form onSubmit={handleSignup}>
                            <div className="form-control pb-5">
                                <input type="text" name='name' placeholder="Write your name" className="input hover:bg-black hover:border-teal-200  input-bordered" required />
                            </div>
                            <div className="form-control pb-5">
                                <input type="email" name='email' placeholder="Write your email" className="input hover:bg-black hover:border-teal-200  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="Password" className="input hover:bg-black hover:border-teal-200  input-bordered" required />
                            </div>
                            <div className="form-control mt-6 ">
                                <input className="btn border-t-white hover:border-teal-200 bg-white" type="submit" value="Signup" />
                            </div>
                        </form>
                        <div className='text-center pt-5 '>
                            <a><Link className='text-blue-100 underline' to={"/login"}>Log in</Link> if you have an account yet</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;