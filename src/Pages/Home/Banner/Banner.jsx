import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-gradient-to-t from-teal-500 pt-20'>
                <div className='flex justify-center'>
                    <h1><img className='w-96' src="https://i.ibb.co/bgZJrTv/dog.png" alt="" /></h1>
                    <h1><img className='pt-20 w-96' src="https://i.ibb.co/2sqXBYm/Picture.png" alt="" /></h1>
                    <h1><img className='w-96' src="https://i.ibb.co/3BNR1GN/robot.png" alt="" /></h1>
                </div>
            </div>
            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3AB6A3" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,112C384,128,480,192,576,192C672,192,768,128,864,96C960,64,1056,64,1152,85.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

        </div>
    );
};

export default Banner;