import React from 'react';
import { useContext } from 'react';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';


const Button = ({ title, toy, link }) => {
    const {_id, name, price, image, description, rating, category} = toy
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()


    const handleAddProduct = toy => {
        // console.log(user, toy)
        if (user) {
            const toyItem = {toyId: _id, name, price, image, description, rating, category, email: user?.email }
            fetch('https://robotechtoy-server.vercel.app/carts', {
                method :'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(toyItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${toy?.name} Added Successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order the toy',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div className='text-center'>
                <Link to={link} onClick={() => handleAddProduct(toy)} >
                    <button href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-950  group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="uppercase absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">{title}</span>
                        <span class="relative invisible w-full">{title}</span>
                    </button>
                </Link>
        </div>


    );
};

export default Button;