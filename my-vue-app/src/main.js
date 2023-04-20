import {createApp} from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js'

let initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'vue-client',
    onLoad: 'login-required',
    'public-client': true,
    enableLogging: true
}

//Create a new instance out of imported Keycloak library
let keycloak = new Keycloak(initOptions)
keycloak
    .init(
        {
            onLoad: initOptions.onLoad,
            pkceMethod: 'S256'
        }
    )
    .then(
        (auth) => {
            if (auth) {
                console.log("Authenticated..")
                onAuthSuccess(keycloak.token);

            } else {
                console.error("Authentication failure.")
                const loginOptions = {
                    redirectUri: 'http://localhost:8080/'
                }
                keycloak.login(loginOptions)
            }
        })
    .catch(
        (err) => {
            console.error("Error while trying to login." + err)
        })

function onAuthSuccess(token) {
    // User is authenticated, get the access token
    console.log(token)
    createApp(App).mount('#app')
}
