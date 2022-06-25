import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://viacep.com.br/ws"
})

export const getCep = async (cep: string) => {
    try {
        const response = await baseUrl.get(`/${cep}/json`)
        return response.data
    } catch (error: any) {
        alert(error.message)
    }
}