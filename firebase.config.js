import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
    apiKey: "AIzaSyC8c5s43O1814qYndY67J8LApx3tJxbL58",
    authDomain: "linked-subjects.firebaseapp.com",
    projectId: "linked-subjects",
    storageBucket: "linked-subjects.appspot.com",
    messagingSenderId: "717934854256",
    appId: "1:717934854256:web:16a3aa10e96f393979f4b5"
})

const auth = firebase.auth()
export { auth }

const store = firebase.firestore()
export { store }

const storage = firebase.storage()
export { storage }

const database = firebase.database()
export { database }