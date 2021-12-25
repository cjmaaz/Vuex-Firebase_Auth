# Vuex State Management with Firebase Auth
(No auth guard is configured)
## Firebase 9 Config
Stored in src/firebase. It stores the configuration and initializing the firebase. Exporting Auth for creating store.

## Vuex 4 Config
user: Stores the user object returned from the Firebase, for the verious purposes, such as email verification status etc. <br/>
authIsReady: Store the auth state, if app is refreshed, store once connection to firebase auth is established.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
