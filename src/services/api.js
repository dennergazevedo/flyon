import axios from 'axios';

const api = axios.create({
    baseURL:'https://inputonbackend.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': 'https://inputonbackend.herokuapp.com',
        'Content-Type': 'application/json',
    }
});

export default api;