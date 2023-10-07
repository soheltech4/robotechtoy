import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Gallery = () => {

    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

    return (
        <div className="App">
            <LightGallery
                elementClassNames="custom-wrapper-class grid md:grid-cols-4 "
                onBeforeSlide={onBeforeSlide}
            >
                <a href="https://i.ibb.co/cTFr7JB/robot.png">
                    <img alt="img1" src="https://i.ibb.co/cTFr7JB/robot.png" />
                </a>
                <a href="">
                    <img alt="img2" src="https://i.ibb.co/cTFr7JB/robot.png" />
                </a>
                <a href="https://i.ibb.co/cTFr7JB/robot.png">
                    <img alt="img3" src="https://i.ibb.co/cTFr7JB/robot.png" />
                </a>
                <a href="https://i.ibb.co/cTFr7JB/robot.png">
                    <img alt="img4" src="https://i.ibb.co/cTFr7JB/robot.png" />
                </a>
            </LightGallery>
        </div>
    );
};

export default Gallery;