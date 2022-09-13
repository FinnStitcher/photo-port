import React from 'react';
import PhotoList from '../PhotoList';

import {capitalizeFirstLetter} from '../../utils/helpers';

function Gallery({currentCat}) {
    const {name, description} = currentCat;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>

            <PhotoList category={name} />
        </section>
    )
};

export default Gallery;