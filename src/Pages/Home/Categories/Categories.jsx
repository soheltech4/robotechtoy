import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [products, setProducts] = useState([])

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

    return (
        <div>
            <h1>Unique Categories:</h1>
            <ul>
                {products.map((category, index) => (
                    <li key={index}>{category}
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;