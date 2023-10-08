import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import Button from '../../../Component/Button/Button';

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState('Educational'); // Initialize with an empty string
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('AllProducts.json')
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
            fetch('AllProducts.json')
                .then((data) => data.json())
                .then((data) => {
                    const filtered = data.filter((item) => item.category === categories);
                    setFilteredProducts(filtered);
                });
        }
    }, [categories, products]);

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
                    <ul className='grid md:grid-cols-3 gap-x-5 gap-y-5'>
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="card w-96 glass">
                                <figure><img className='' src={product?.image} alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product?.name}</h2>
                                    <p>Category: {product?.category}</p>
                                    <div className="flex justify-between">
                                        <p>Rating: <span className='text-yellow-500'>{product?.rating}</span></p>
                                        <Button title={"Add Product"}></Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <Button title={"SEE All TOYS"} link={"/alltoys"}></Button>
        </>
    );
};

export default Categories;
