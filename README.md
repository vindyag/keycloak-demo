# keycloak-demo

## my-java-app Project setup

```
./gradlew bootRun
```

## my-vue-app Project setup

Start up Vue application using the Vue CLI development server
```
yarn install
```

## Project startup
```
yarn serve --port 8081
```

### Start Keycloak
Here we are using Docker to startup and configure Keycloak

#### Clean up all Docker containers
```
docker-compose down --volumes
```

#### Build and run the Docker container
```
docker-compose up
```

You can refer this blog post on [SPA Security with PKCE](https://medium.com/@vindya.gunawardena/spa-security-with-pkce-fb55af7d3f5) for more details.



#### Credentials
- Keycloak Admin Console UserName - `admin`
- Vue App UserName - `vindya`

_You can refer `.env` for passwords_