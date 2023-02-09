import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDl56aJy8mRDKhvmKCpsepEWK0LjdCK7bw",
    authDomain: "chatgpt-f9047.firebaseapp.com",
    projectId: "chatgpt-f9047",
    storageBucket: "chatgpt-f9047.appspot.com",
    messagingSenderId: "56142563742",
    appId: "1:56142563742:web:60fb8e7e921b9b38d8ee8f",
    measurementId: "G-QM2YV61508"
};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}

