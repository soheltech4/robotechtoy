import React from 'react';

const Button = ({title}) => {
    return (
        <div className='text-center'>
            <button className='bg-green text-2xl uppercase font-bold'>{title}</button>
        </div>
    );
};

export default Button;