/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
    })

    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('header reads "Contact me"', () => {
        const {getByTestId} = render(<ContactForm />);

        expect(getByTestId('contact-h1')).toHaveTextContent('Contact me');
    });

    it('button reads "Submit"', () => {
        const {getByTestId} = render(<ContactForm />);

        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
});