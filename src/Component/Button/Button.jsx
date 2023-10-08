import React from 'react';

const Button = ({title}) => {
    return (
        <div className='text-center'>
            <button className='btn btn-outline text-2xl uppercase duration-1000 font-bold'>{title}</button>
        </div>


    );
};

export default Button;