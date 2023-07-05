import {createApp} from 'vue'
import App from './App.vue'
import { authenticateUser } from '@/auth/auth-keycloak.js';

authenticateUser(onAuthSuccess, onAuthError)

function onAuthSuccess(token){
    // User is authenticated, get the access token
    console.log(token)
    createApp(App).mount('#app')
}

function onAuthError(errorMsg){
    console.error("Error while trying to login." + errorMsg)
}