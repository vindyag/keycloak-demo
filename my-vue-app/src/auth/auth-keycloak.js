import Keycloak from "keycloak-js";

let initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'vue-app-client',
    onLoad: 'login-required',
    'public-client': true,
    enableLogging: true
}


export function authenticateUser(onAuthSuccess, onAuthError) {
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
                onAuthError("Error while trying to login." + err)
            })
}


//Create a new instance out of imported Keycloak library
let keycloak = new Keycloak(initOptions)

export default keycloak