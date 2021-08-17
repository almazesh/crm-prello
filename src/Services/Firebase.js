import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAjTjkLvHx3he534A-bjyMj5KURqfH1HZs",
    authDomain: "prello-819ff.firebaseapp.com",
    projectId: "prello-819ff",
    storageBucket: "prello-819ff.appspot.com",
    messagingSenderId: "541436162201",
    appId: "1:541436162201:web:82944f40c454f4804c4808"
};

export const fire = firebase;

export const googleProvider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);