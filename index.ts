let mockGet: any;

describe.only("Teste de Integração",()=>{
    beforeEach(() => {
        mockGet = vi.spyOn(baseUrl, 'get');
    });
    
    afterEach(() => {
        vi.clearAllMocks();
    });
    
    
    test("Poderia eu receber os dados de um local através do cep pelo getCep", async ()=>{
        const data = {
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
        }
        
        mockGet.mockImplementationOnce(() => Promise.resolve({data}))
        await getCep("50721260")
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet.mock.calls.length).toEqual(1)
        const expected = await mockGet.mock.results[0].value
        expect({data}).toStrictEqual(expected)
    
    })
    
    test("Poderia eu receber uma mensagem de falha na internet pelo getCep", async()=>{
        const data = {
            message: "Network Error"
        }
        mockGet.mockImplementationOnce(() => Promise.reject({data}))
        await getCep("00000000")
        expect(mockGet).toHaveBeenCalled();
        expect(mockGet.mock.calls.length).toEqual(1)
        const expected = await mockGet.mock.results[0].value
        expect({data}).toStrictEqual(expected)
    })
})