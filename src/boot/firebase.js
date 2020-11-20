import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
    apiKey: "AIzaSyB_JMhJ86-a0Zje1tP2EbuOTkml060e8u4",
    authDomain: "awesometodo-3c48e.firebaseapp.com",
    databaseURL: "https://awesometodo-3c48e.firebaseio.com",
    projectId: "awesometodo-3c48e",
    storageBucket: "awesometodo-3c48e.appspot.com",
    messagingSenderId: "927692617500",
    appId: "1:927692617500:web:385cf835631ff583b3acd9",
    measurementId: "G-J6187E849X"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
