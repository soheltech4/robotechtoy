import React from 'react';

const Title = ({title, subTitle}) => {
    return (
        <div className='text-center px-5 mb-10'>
            <div className="divider"></div> 
            <h1 className='text-4xl uppercase'>{title}</h1>
            <h1 className='text-xl'>{subTitle}</h1>
            <div className="divider"></div> 
        </div>
    );
};

export default Title;