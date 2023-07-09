/* eslint-disable */
import axios from 'axios';
import keycloak from '@/auth/auth-keycloak.js';

const api = axios.create()
api.defaults.baseURL = 'core/v1/'

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
