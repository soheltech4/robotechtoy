import React from 'react';

const CountDown = () => {
    return (
        <div className='px-10 mt-20 mb-20'>
            <div className='grid grid-cols-3 border-2 rounded-lg py-10  text-center'>
                <div className='text-center '>
                    <p className='text-8xl font-mono font-bold justify-center items-center'>2<span className='text-teal-500'>+</span></p>
                    <p className='text-2xl'>Total Users</p>
                </div>
                <div className='text-center '>
                    <p className='text-8xl font-mono font-bold justify-center items-center'>21<span className='text-teal-500'>+</span></p>
                    <p className='text-2xl'>New Users</p>
                </div>
                <div className='text-center '>
                    <p className='text-8xl font-mono font-bold justify-center items-center'>30<span className='text-teal-500'>+</span></p>
                    <p className='text-2xl'>Total Products</p>

                </div>
            </div>
        </div>
    );
};

export default CountDown;