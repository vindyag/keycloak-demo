import {createApp} from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js'

let initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'my-vue-app',
    onLoad: 'login-required'
}

let keycloak = new Keycloak(initOptions)
keycloak
    .init(
        {
            onLoad: initOptions.onLoad
        }
    )
    .then(
        (auth) => {
            if (auth) {
                console.log("Authenticated")
                createApp(App).mount('#app')
            } else {
                console.error("Authentication failure")
                window.location.reload()
            }
        })
    .catch(
        () => {
            console.error("Error while trying to login")
        })
