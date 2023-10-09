import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const AllToys = () => {
    const [Toys, setToys] = useState([])

    useEffect(() => {
        fetch('AllProducts.json')
            .then(data => data.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='pt-20 px-5 md:flex justify-between lg:flex-row-reverse'>
            <div>
                <h1>Add Vertise</h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5 items-center'>
                {
                    Toys.map(toy => <Toy key={toy?.id} toy={toy}></Toy>)
                }
            </div>
            <div>
                <h1>Add Vertise</h1>
            </div>
        </div>
    );
};

export default AllToys;