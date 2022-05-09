import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueFeather from 'vue-feather'
import '@fortawesome/fontawesome-free/js/all.js';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyBuprMVZLx08TDnLkRe3zZ4toDfELHXBcQ",
    authDomain: "personal-1616c.firebaseapp.com",
    projectId: "personal-1616c",
    storageBucket: "personal-1616c.appspot.com",
    messagingSenderId: "133813998835",
    appId: "1:133813998835:web:8f1d25c104ea76e4e69386",
    measurementId: "G-RQTHF6K4PF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp)

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('uid: ', uid);
        // ...

        store.commit('setLoggedInState', user);
        console.log('user: ', user);
        router.replace({ path: "/home" })
    } else {
        // User is signed out
        // ...
        console.log('no user');
        store.commit('setLoggedInState', false, {});
        router.replace({ path: "/" })
        //router.go('login')
    }
});

createApp(App).use(store).use(router).component(VueFeather.name, VueFeather).mount('#app')
