/* eslint-disable */
import axios from 'axios';
import {API_BASE_URL} from '@/config/config';
import keycloak from '@/auth/auth-keycloak.js';

const api = axios.create(
    {
        baseURL: API_BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });

export async function fetchData() {
// eslint-disable-next-line no-debugger
    const token = keycloak.token
    const response = await api.get('/notes', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
