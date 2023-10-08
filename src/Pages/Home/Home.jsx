import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Categories from './Categories/Categories';
import CountDown from './CountDown/CountDown';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <CountDown></CountDown>
        </div>
    );
};

export default Home;