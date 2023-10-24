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

#### Credentials
- Keycloak Admin Console UserName and Password - admin / admin
- Vue App UserName and Password - vindya / vindya
