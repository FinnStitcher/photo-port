/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('displays emoji in h2', () => {
        // searching for an element with the aria-label 'camera'
        const {getByLabelText} = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const {getByTestId} = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
});