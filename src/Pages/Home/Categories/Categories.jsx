import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import Button from '../../../Component/Button/Button';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState('Educational'); // Initialize with an empty string
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((data) => data.json())
            .then((data) => {
                const uniqueCategories = Array.from(
                    new Set(data.map((product) => product.category))
                );
                setProducts(uniqueCategories);
                setFilteredProducts(data); // Set all products by default
            });
    }, []);

    const handleSubmit = (event) => {
        const item = event.target.value;
        setCategories(item);
    };

    useEffect(() => {
        if (categories === '') {
            // If "All categories" is selected, show all products
            setFilteredProducts(products);
        } else {
            fetch('http://localhost:5000/products')
                .then((data) => data.json())
                .then((data) => {
                    const filtered = data.filter((item) => item.category === categories);
                    setFilteredProducts(filtered);
                });
        }
    }, [categories, products]);

    // const handleSingleData = (id) => {
    //     if (categories.filter(toy => toy? ._id === id)) {
    //         console.log("hiii")
    //     }

    // }


    return (
        <>
            <Title title={"Shop by Category"} subTitle={"Choice your best product"}></Title>
            <div className=''>
                <div className='grid md:flex gap-x-5 justify-center px-10 mb-20'>
                    <select className="select select-bordered w-full md:max-w-xs mb-5" onChange={handleSubmit}>
                        {products.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <div className='grid md:grid-cols-3 gap-x-5 gap-y-5'>
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="card w-96 glass">
                                <div className="card w-96 glass">
                                    <Link to={`/toydetails/${product?._id}`}>
                                        <figure><img src={product?.image} className='rounded-t-xl' alt="car!" /></figure>
                                        <div className="p-5">
                                            <div className='flex justify-between'>
                                                <h2 className="card-title">{product?.name}</h2>
                                                <div className=''>
                                                    <StarRatings
                                                        rating={product?.rating}
                                                        starDimension="20px"
                                                        starSpacing="15px"
                                                        starRatedColor="yellow"
                                                        starSpacing="2px"
                                                    />
                                                </div>
                                            </div>
                                            <p className='text-lg'> Price : $<span className='text-yellow-400'>{product?.price}</span></p>
                                        </div>
                                    </Link>
                                    <div className="card-actions justify-end pb-5 pr-3">
                                        <Button title={"Add Product"} toy={product}></Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <Link to="/alltoys" >
                    <button href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-950  group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="uppercase absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">SEE ALL TOYS</span>
                        <span class="relative invisible w-full">SEE ALL TOYS</span>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Categories;
