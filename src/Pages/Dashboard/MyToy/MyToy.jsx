import React, { useContext } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyToy = () => {
    const [cart, refetch] = useCart()
    const { user } = useContext(AuthContext)
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [modalToy, setModalToy] = useState([])

    useEffect(() => {
        fetch('https://robotechtoy-server.vercel.app/products')
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((product) => product.email === user.email);
                setFilteredProducts(filtered);
            });
    }, []);

    const handleDelete = toy => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://robotechtoy-server.vercel.app/products/${toy?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleModal = (toy) => {
        setModalToy(toy)
        document.getElementById('my_modal_4').showModal()
    }

    const handleUpdate = event =>{
        const form = event.preventDefault().value
        console.log(form)
    }

    return (
        <div className='w-full md:ml-20  md:pr-20'>
            <div className="overflow-x-auto  md:w-full md:mr-10 bg-gray-500 bg-opacity-25 rounded-lg">
                <h1 className='text-center text-2xl font-bold my-5'>MY ADDED TOYS</h1>
                <div className="divider"></div>
                <table className="table">
                    <thead>
                        <tr className='text-center text-lg text-white'>
                            <th>#</th>
                            <th>Product Image</th>
                            <th >Toy Name</th>
                            <th>Catergory</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-lg w-full'>
                        {
                            filteredProducts.map((toy, index) =>
                                <tr key={toy?._id}>
                                    <td>
                                        <h1>{index + 1}</h1>
                                    </td>
                                    <td>
                                        <Link to={`/toydetails/${toy?._id}`}>
                                            <div className="avatar">
                                                <div className="mask mask-square w-12 h-12">
                                                    <img src={toy?.image} className='' alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <p>{toy?.name}</p>
                                    </td>
                                    <td>{toy?.category}</td>
                                    <td>$<span className='text-yellow-600'>{toy?.price}</span></td>
                                    <td>
                                        <button className="" onClick={() => handleModal(toy)}><FaEdit className='w-8 text-red-700'></FaEdit></button>
                                        <dialog id="my_modal_4" className="modal">
                                            <div className="modal-box w-11/12 max-w-5xl">
                                                <div className='bg-gray-500 bg-opacity-25 p-2 md:p-10 rounded-lg w-full'>
                                                    <h1 className='text-3xl text-center pb-5'>UPDATE TOY</h1>
                                                    {modalToy &&
                                                        <form onSubmit={handleUpdate}>
                                                            <div className='grid grid-cols-2 gap-5'>
                                                                <div className="form-control w-full ">
                                                                    <p className='text-left  pl-3 text-sm'>Name :</p>
                                                                    <input type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" required className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <p className='text-left pl-3 text-sm'>Email :</p>
                                                                    <input type="email" disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <p className='text-left  pl-3 text-sm'>Toy Name :</p>
                                                                    <input type="text" defaultValue={modalToy?.name} placeholder="Toy Name" className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <p className='text-left pl-3 text-sm'>Toy Price :</p>
                                                                    <input type="number" defaultValue={modalToy?.price} placeholder="Toy Price" className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <p className='text-left pl-3 text-sm'>Toy Rating :</p>
                                                                    <input type="number" defaultValue={modalToy?.rating} placeholder="Rating" className="input input-bordered w-full " />
                                                                </div>
                                                                <div className="form-control w-full ">
                                                                    <p className='text-left pl-3 text-sm'>Toy Category :</p>
                                                                    <input type="text" disabled defaultValue={modalToy?.category} placeholder="Category" className="input input-bordered w-full " />
                                                                </div>
                                                            </div>
                                                            <div className="form-control py-5">
                                                                    <textarea className="textarea textarea-bordered h-20 w-full" defaultValue={modalToy?.description} placeholder="Description"></textarea>
                                                                </div>
                                                            <div className='flex justify-between'>
                                                                <div className="form-controlw-full gap-x-10 flex justify-between max-w-xs">
                                                                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                                                    <img className='w-20' src={modalToy?.image} alt="" />
                                                                </div>
                                                            </div>
                                                            <input className='relative px-2 hover:bg-indigo-950 inline-flex items-center justify-center overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group' type="submit" value="Update TOY">
                                                            </input>
                                                        </form>
                                                    }
                                                </div>

                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                        <button>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(toy)}>
                                            <FaTrashAlt className='h-6 text-red-700'></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;