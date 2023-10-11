import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const {signIn, signwithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    console.log(navigate, location)

    const from = location.state?.from?.pathname || "/"

    const handlelogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user 
            console.log(user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from, {replace: true})
        })
    }

    const handleGoogleSignin = () => {
        signwithGoogle()
            .then(result => {
                const user = result.user
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, {replace: true})
            })
            .catch(error => {
                console.log("error", error.message)
            })
            
    }

    return (
        <div>
            <div className="pt-20 pb-20 p-3 bg-base-200 flex justify-center">
                <div className="hero-content bg-slate-600 rounded-md p-10 gap-20 grid md:flex">
                    <div className=" rounded-none md:w-full flex-shrink-0 max-w-sm justify-center">
                        <img src="https://i.ibb.co/wKvm3Cg/logo.png" alt="" />
                        <div className='pt-10'>
                            <button onClick={handleGoogleSignin} className='text-center w-full hover:bg-black hover:border-teal-200 justify-center input flex items-center gap-5 '>
                                <h1>Sign in with Google </h1>
                                <a><FaGoogle /></a>
                            </button>
                            <button className='text-center w-full hover:bg-black hover:border-teal-200 mt-5 justify-center input flex items-center gap-5 '>
                                <h1>Sign in with Github </h1>
                                <a><FaGithub /></a>
                            </button>
                        </div>

                        <div className='text-center text-gray-50 my-5'><h1>---------------------------</h1></div> 

                        <form onSubmit={handlelogin}>
                            <div className="form-control pb-5">
                                <input type="email" name='email' placeholder="Email" className="input hover:bg-black hover:border-teal-200  input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="password" className="input hover:bg-black hover:border-teal-200  input-bordered" required />
                            </div>
                            <div className="form-control mt-6 ">
                                <input className="btn hover:border-teal-200 " type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='text-center pt-5 '>
                            <a><Link className='text-blue-100 underline' to={"/signup"}>Signup</Link> If you don't have and account</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;