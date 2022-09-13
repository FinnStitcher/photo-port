import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery(props) {
    const currentCategory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food truck, and other commercial projects.'
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>

            <div className="flex-row">
                <img alt="Shelves of produce" src={photo} className="img-thumbnail mx-1" />
            </div>
        </section>
    )
};

export default Gallery;