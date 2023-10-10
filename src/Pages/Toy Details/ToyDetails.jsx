import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

const toys = useLoaderData()
console.log(toys)
return (
        <div>
            <h1>{toys.name}</h1>
        </div>
    );
};

export default ToyDetails;