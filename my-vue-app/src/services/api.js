import axios from 'axios';
import {API_BASE_URL} from '@/config/config';
import keycloak from 'keycloak-js';

const api = axios.create({
                             baseURL: API_BASE_URL,
                             headers: {
                                 'Content-Type': 'application/json',
                             },
                         });

export async function fetchData() {
    const token = await keycloak.getToken();
    const response = await api.get('/secret-data', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
