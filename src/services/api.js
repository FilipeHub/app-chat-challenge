import axios from 'axios'

const BACKEND_URL = 'http://localhost:3333';

const api = axios.create({
    baseURL: BACKEND_URL
});


export default api;