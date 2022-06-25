import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest'
import App from './App';

const sum = (a:number, b:number):number => a + b;

it('should return the sum of two numbers', () => {


})  

const Component = () => <h1 data-testid="teste">teste</h1>;

it('should render the component', () => {
    const { 
        queryByTestId,
        container,
    } = render(<Component />)
})

it('should render the App', () => {
    const { debug, queryByRole, queryAllByRole, container } = render(<App />)
})