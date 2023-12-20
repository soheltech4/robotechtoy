import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const AllToys = () => {
    const [Toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://robotechtoy-server.vercel.app/products')
            .then(data => data.json())
            .then(data => setToys(data))
    }, [])

    console.log(Toys)

    return (
        <div className='pt-20 px-5 md:flex justify-center gap-16'>
            <div className='grid md:grid-cols-3 gap-5 items-center'>
                {
                    Toys.map(toy => <Toy key={toy?._id} toy={toy}></Toy>)
                }
            </div>
        </div>
    );
};

export default AllToys;