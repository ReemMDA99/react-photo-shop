import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';
import Nav from '../../Nav';

afterEach(cleanup);

describe('ContactForm component renders', () => {
    it('renders', () => {
      render(<ContactForm />);
    })
  
    it('matches snapshot', () => {
      const { asFragment } = render(<Nav/>);
  
      expect(asFragment()).toMatchSnapshot();
    });
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
      })
       
      it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
      })
      
  })