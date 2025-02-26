import axios from "axios";

const api = axios.create({
    baseURL: 'https://projetointegradorcrm.onrender.com/'
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}