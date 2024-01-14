import axios from 'axios'

export const api_key = 'c96e5fa74cafd6c5db47e040b894beb1';
export const api = axios.create({
baseURL : 'https://api.themoviedb.org/3'
})