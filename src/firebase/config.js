import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "_",
    authDomain: "_",
    projectId: "_",
    storageBucket: "_",
    messagingSenderId: "_",
    appId: "_"
};

initializeApp(firebaseConfig);

// init Auth
const auth = getAuth();

export default auth;