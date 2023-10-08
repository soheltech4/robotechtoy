import React, { useEffect, useState } from 'react';
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

    const [images, setImage] = useState([])

    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

    useEffect(() => {
        fetch('gallery.json')
            .then(data => data.json())
            .then(data => setImage(data))
    }, [])

    return (
        <div className="App p-5">
            <LightGallery
                elementClassNames="custom-wrapper-class grid md:grid-cols-5 gap-5 "
                onBeforeSlide={onBeforeSlide}
            >
                {
                    images.map(image => <a href={image?.image}>
                        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                            <img src={image?.image}
                                className="max-w-xs transition duration-500 ease-in-out hover:scale-110"
                                alt={image?.name} />
                        </div>
                    </a>)
                }
            </LightGallery>
        </div>
    );
};

export default Gallery;