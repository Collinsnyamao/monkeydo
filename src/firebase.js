/* import { ref, onUnmounted } from 'vue';
import { Store } from 'vuex';
import store from './store/index'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import router from './router';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const auth = getAuth(firebaseApp)

export const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user: ', user);
            // ...
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            return error;
        });
}

export function logInExistingUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return error;
        });
}

export function logOutUser() {
    signOut(auth).then(() => {
        // Sign-out successful.
        router.replace({ path: "/" })
    }).catch((error) => {
        // An error happened.
    });
}

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
}); */