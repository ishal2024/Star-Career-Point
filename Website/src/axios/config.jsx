import axios from 'axios'

export const api = axios.create({
    baseURL : "https://star-career-point.onrender.com/api"
})