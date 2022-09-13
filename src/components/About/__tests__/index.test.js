import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

// render = jest creates a simulated dom to test-render
// cleanup = remove components from the sim dom to prevent memory leaks (memory lost on things not in use)

afterEach(cleanup);
// delete stuff after each test

describe('About component', () => {
    // it() and test() are equivalent
    it('renders', () => {
        render(<About />);
    });

    // testing against snapshots of the DOM node structure
    // i don't really understand what this all means, or why it's important
    // btw, examining snapshots created that __snapshots__ folder in this directory
    // it's taking a raw version of About and using it for comparison
    it('matches snapshot DOM node structure', () => {
        // asFragment = only return the About component
        const {asFragment} = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})