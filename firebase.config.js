import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
    // put firebase config here
})

const auth = firebase.auth()
export { auth }

const store = firebase.firestore()
export { store }

const storage = firebase.storage()
export { storage }

const database = firebase.database()
export { database }
