import { render } from '@testing-library/react';
import { expect, it, test } from 'vitest';
import logo from './logo.svg'
import App from './App';

const sum = (a:number, b:number):number => a + b;

it('Eu poderia colocar dois numeros e obter a soma deles', () => {
    const a = 10;
    const b = 13;
    const expected = a + b;

    expect(sum(a,b)).toEqual(expected);
})  

const somaIlimitada = (numeros: number[]): number => {
    let sum = 0;
    for(let i = 0; i < numeros.length; i++){
        sum += numeros[i];
    }
    return sum
}
 // it = test
test('Eu poderia colocar qualquer quantidade de numeros e obter a soma deles', () => {
    const firstArray = [1];
    const secondArray = [1,2];
    const emptyArray = [] as number[];

    const expectedFirstResult = 1;
    const expectedSecondResult = 3;
    const emptyResult = 0;

    expect(somaIlimitada(firstArray)).toEqual(expectedFirstResult);
    expect(somaIlimitada(secondArray)).toEqual(expectedSecondResult);
    expect(somaIlimitada(emptyArray)).toEqual(emptyResult);
})

const Component = () => <div data-testid="container"><h1 data-testid="title">hello word</h1></div>

it("Poderia renderizar o meu componente React com o texto 'hello word'",()=>{
    const { queryByTestId, container } = render(<Component />);
    
    
    expect(container.firstChild).toBeInTheDocument()
    expect(queryByTestId("container")).toBeInTheDocument()
    expect(queryByTestId("container")).toContainElement(queryByTestId("title"))
})

it("Poderia renderizar o meu componente React com o texto 'hello word'", () => {
    const { debug, queryByRole, queryByTestId } = render(<App />);
    //debug(queryByRole("img"))

    expect(queryByRole("img")).toHaveClass("App-logo")
    expect(queryByTestId("logo")).toHaveClass("App-logo")
    expect(queryByTestId("logo")).toHaveAttribute("class", "App-logo")
    expect(queryByTestId("logo")).toHaveAttribute("alt", "logo")
    expect(queryByTestId("logo")).toHaveAttribute("src", logo)
    
    expect(queryByTestId("title")).toHaveTextContent("Hello Vite + React!")
})


//const Component = () => <h1 data-testid="teste">teste</h1>;

//it('should render the component', () => {
    //const { queryByTestId, container } = render(<Component />)
//})

//it('should render the App', () => {
    //const { debug, queryByRole, container } = render(<App />)
//}),