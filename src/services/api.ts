import axios from "axios"

const api = axios.create({
    baseURL: 'http://palpiteirosapp.net.br/api/v1'
    // baseURL: 'http://192.168.5.228:8080/api/v1'
})

export default api