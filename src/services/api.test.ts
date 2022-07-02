import { describe, expect, test, vi} from "vitest";
import { getCep, baseUrl } from "./api";

let mockGet: any;

describe.only("Teste de integração", () => {
    //cria a função mockada a cada teste
    beforeEach(()=> {
        mockGet = vi.spyOn(baseUrl, "get");
    })
    //excluir a função mockada a cada teste
    afterEach(() => {
        vi.resetAllMocks();
    })

    test("Posso eu validar se a requisição foi feita com sucesso", async () => {
        const expected = {
            "cep": "50721-260",
            "logradouro": "Rua Cláudio Brotherhood",
            "complemento": "",
            "bairro": "Cordeiro",
            "localidade": "Recife",
            "uf": "PE",
            "ibge": "2611606",
            "gia": "",
            "ddd": "81",
            "siafi": "2531"
        }
        mockGet.mockImplementationOnce(() => Promise.resolve({ data: expected }))
        await getCep("50721260")
        expect(mockGet).toHaveBeenCalled()
        expect(mockGet.mock.calls.length).toEqual(1)
        expect(mockGet.mock.results[0].value.data).toEqual(expected)
    })
    
    test("Posso eu receber um - Network Error - não acessar a api", async() => {
        const expected = {
            status: "500",
            error: "Network Error"
        }
        mockGet.mockImplementationOnce(() => Promise.reject({ data: expected }))
        await getCep("50721260")
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet.mock.calls.length).toEqual(1);
        expect(mockGet.mock.results[0].value.data).toEqual(expected);
    })
})