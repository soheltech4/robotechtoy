import React from 'react';
import Button from '../../Component/Button/Button';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id, name, price, image, description, rating, category } = toy

    return (
        <div>
            <div className="card w-96 glass">
                <Link to={`/toydetails/${_id}`}>
                    <figure><img src={image} className='rounded-t-xl w-96 h-56' alt="car!" /></figure>
                    <div className="p-5">
                        <div className='flex justify-between'>
                            <h2 className="card-title">{name}</h2>
                            <div className=''>
                                <StarRatings
                                    rating={rating}
                                    starDimension="20px"
                                    starSpacing="15px"
                                    starRatedColor="yellow"
                                    starSpacing="2px"
                                />
                            </div>
                        </div>
                        <p className='text-lg'> Price : $<span className='text-yellow-400'>{price}</span></p>
                    </div>
                </Link>
                <div className="card-actions justify-end pb-5 pr-3">
                    <Button title={"Add Product"} toy={toy}></Button>
                </div>
            </div>
        </div>
    );
};

export default Toy;