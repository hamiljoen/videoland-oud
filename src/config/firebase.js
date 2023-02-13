import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import useDatabase from "../hooks/useDatabase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBAecOc4mwpoZ9ttnjKC-ww7FWlDOO_WU8",
    authDomain: "videoland-f8bf8.firebaseapp.com",
    projectId: "videoland-f8bf8",
    storageBucket: "videoland-f8bf8.appspot.com",
    messagingSenderId: "110702216896",
    appId: "1:110702216896:web:7b2b411524493a3a2e8f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { app, database }