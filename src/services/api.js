import axios from 'axios'

const API = axios.create({
    baseURL: 'https://technoprint-api.vercel.app/'
})

export const getKnifesAPI = {
    async getByNumber(number) {
        return (await API.get('knifes/search?number=' + number)).data
    },
    async getBySize(size) {
        const response = await API.get(('knifes/search'), {
            params: size
        })
        return response.data
    }
}