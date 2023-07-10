/* eslint-disable */
import axios from 'axios';
import keycloak from '@/auth/auth-keycloak.js';

const api = axios.create()
api.defaults.baseURL = 'http://localhost:9090/core/v1/'
//api.defaults.baseURL = 'core/v1/'
const cors = {
    origin: 'http://localhost:8081',
    allowedHeaders: ['Content-Type', 'Authorization'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE'],
};

axios.defaults.headers.common['Access-Control-Allow-Origin'] = cors.origin;
axios.defaults.headers.common['Access-Control-Allow-Headers'] = cors.allowedHeaders.join(', ');
axios.defaults.headers.common['Access-Control-Allow-Methods'] = cors.allowedMethods.join(', ');

export async function fetchData() {
// eslint-disable-next-line no-debugger
    const token = keycloak.token
    const response = await api.get('/notes', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
