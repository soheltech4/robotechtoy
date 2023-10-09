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
        <div className='pt-20 px-5 md:flex justify-center gap-16'>
            <div className=''>
                <h1 className=''><img className='w-60 mb-16' src="https://i.ibb.co/Wf1d9V9/Screenshot-2023-10-09-163118.png" alt="" /></h1>
                <h1 className=''><img className='w-60' src="https://i.ibb.co/XDWT9Ft/fdfdf.jpg" alt="" /></h1>
            </div>
            <div className='grid md:grid-cols-3 gap-5 items-center'>
                {
                    Toys.map(toy => <Toy key={toy?.id} toy={toy}></Toy>)
                }
            </div>
        </div>
    );
};

export default AllToys;