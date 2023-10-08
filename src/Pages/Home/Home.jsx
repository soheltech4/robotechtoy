import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
        </div>
    );
};

export default Home;