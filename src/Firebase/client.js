import firebase from "firebase/app";
import "@firebase/firestore"

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCcQ3duVJjRo5ZbkqSgAhg2ntpRRpvWUTc",
    authDomain: "jackie-app-74305.firebaseapp.com",
    projectId: "jackie-app-74305",
    storageBucket: "jackie-app-74305.appspot.com",
    messagingSenderId: "924103321723",
    appId: "1:924103321723:web:21ebc1274ba33aa0345ade"
});

export const getFirebase = () => {
    return firebaseConfig
}

//Funciones de Firebase
export const getFirestore = () => {
    return firebase.firestore(firebaseConfig)
}