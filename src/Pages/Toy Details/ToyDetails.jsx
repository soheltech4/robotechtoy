import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from '../../Component/Button/Button';
import StarRatings from 'react-star-ratings';

const ToyDetails = () => {

    const toy = useLoaderData()
    console.log(toy)

    return (
        <div className='md:p-20 p-10 pt-20 rounded-lg '>
            <div className="bg-gray-500  bg-opacity-25 p-10 md:p-20 rounded-lg">
                <div className="md:flex md:gap-20 md:flex-col lg:flex-row">
                    <img src={toy?.image} className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='md:w-1/2'>
                        <div className='flex justify-between md:my-0 my-5'>
                            <h1 className="md:text-4xl text-xl  font-bold">{toy?.name}</h1>
                            <div className=''>
                                <StarRatings
                                    rating={toy?.rating}
                                    starDimension="20px"
                                    starSpacing="15px"
                                    starRatedColor="yellow"
                                    starSpacing="2px"
                                />
                            </div>
                        </div>
                        <p className="md:py-6 w-full md:my-0 my-5 md:text-xl ">{toy?.description}</p>
                        <p className='text-lg '> Categories : <span className='text-yellow-400 '>{toy?.category}</span></p>
                        <p className='text-lg pt-5'> Price : $ <span className='text-yellow-400'>{toy?.price}</span></p>
                        <div className='flex items-center mt-5 gap-5 md:pt-5'>
                            <div className='text-center'>
                                <button href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-700 transition duration-300 ease-out border-2 border-red-700 rounded-full shadow-md group">
                                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-700  group-hover:translate-x-0 ease">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="uppercase absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">buy Now</span>
                                    <span class="relative invisible w-full">buy Now</span>
                                </button>
                            </div>
                            <div className="card-actions md:pr-3">
                                <Button title={"Add Product"}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 bg-gray-500 rounded-lg bg-opacity-25'>
                    <h1 className='text-center w-full bg-gray-500 rounded-t-lg text-xl py-3 bg-opacity-30'>Product Details of <span className='font-bold'>{toy?.name}</span></h1>
                    <div className='px-5'>
                        <h1 className="text-xl font-bold pt-5">{toy?.name}</h1>
                        <p className="md:py-6 text-lg w-full md:w-4/6">{toy?.description}</p>
                        <li>Type : {toy?.category} </li>
                        <li>Material : Plastic</li>
                        <li>Features : Easy to Play, Deformable, Educational Toy, Robot Design</li>
                        <li>Robot Size: 7cm x 6cm x 3cm/2.76" x 2.36" x 1.18" (Approx.)</li>
                    </div>
                    <div className="divider px-5"></div> 
                    <div className='pl-5 pr-5 pb-5'>
                        <p>Specifications : Deformable car toy, crafted with exquisite workmanship with realistic appearance, look adorable. Compact size, easy to carry for children to put into pockets.
                            Joints can swing, easy to transform, good to stimulate children’s curiosity during imaginative play.
                            Perfect for collection, car decoration, desk decoration, theme store decoration and any place decoration
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;