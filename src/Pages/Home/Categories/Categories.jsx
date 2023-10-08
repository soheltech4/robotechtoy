import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState('')

    useEffect(() => {
        fetch('AllProducts.json')
            .then((data) => data.json())
            .then((data) => {
                const uniqueCategories = Array.from(
                    new Set(data.map((product) => product.category))
                );
                setProducts(uniqueCategories);
            });
    }, []);

    const handleSubmit = (event) => {
        const item = event.target.value
        setCategories(item)
    }

    return (
        <div onChange={handleSubmit}>
            <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                {products.map((category, index) => (
                    <option key={index}>{category}</option>
                ))}
            </select>
            <h1>{categories}</h1>
        </div>
    );
};

export default Categories;