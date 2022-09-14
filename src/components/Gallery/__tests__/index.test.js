import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Gallery from '..';

afterEach(cleanup);

const portrait = {name: 'portraits', description: 'Portraits of people in my life.'};

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCat={portrait} />);
    });

    // checking that it matches the snapshot - whats expected
    it('matches snapshot', () => {
        const {asFragment} = render(<Gallery currentCat={portrait} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('has the title Portraits', () => {
        const {getByTestId} = render(<Gallery currentCat={portrait} />);
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
    })
});