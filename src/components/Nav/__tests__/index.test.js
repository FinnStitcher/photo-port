/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

const categories = [
    {name: 'portraits', description: 'Portraits of people in my life.'}
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav categories={categories} currentCat={mockCurrentCategory} setCurrentCat={mockSetCurrentCategory} />);
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Nav categories={categories} currentCat={mockCurrentCategory} setCurrentCat={mockSetCurrentCategory} />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji is visible', () => {
    it('displays emoji in h2', () => {
        // searching for an element with the aria-label 'camera'
        const {getByLabelText} = render(<Nav categories={categories} currentCat={mockCurrentCategory} setCurrentCat={mockSetCurrentCategory} />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const {getByTestId} = render(<Nav categories={categories} currentCat={mockCurrentCategory} setCurrentCat={mockSetCurrentCategory} />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
});