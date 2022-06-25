import axios from "axios";
import { beforeAll, test, vi } from "vitest";
import * as MockAdapter from "axios-mock-adapter/types";
import { getCep } from "./api";

const mock = new MockAdapter(axios);

const mockedCep =() => {
    mock.onGet("/50721260/json").reply(200, {
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    })
}


beforeAll(() => {
    mockedCep()
})



test("Poderia eu receber os dados de um local através do cep pelo getCep", async ()=>{
    const result = await getCep("50721260")
    expect(result).toBeInTheCalled()

})

test("Poderia eu receber uma mensagem de falha na internet pelo getCep",()=>{
    
})