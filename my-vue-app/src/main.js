import {createApp} from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js'

let initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'my-vue-app',
    onLoad: 'login-required',
    'public-client': true
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
                console.log("Authenticated")
                // User is authenticated, get the access token
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


/*Vue.http.interceptors.push(function(request) {

    // modify request
    console.log(request)

    // return response callback
    return function(response) {

        // modify response
        console.log(response)

    };
});*/

